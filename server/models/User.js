/* Mongoose user model 
 * Date: 6/12/20
 * Author: Jack Burns
 */

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');

const saltRounds = 16;

var UserSchema = new mongoose.Schema({
	/* user email */
	email: {
		type: String,
		lowercase: true,
		unique: true,      /* checked by uniqueValidator */
		required: [true, 'Can\'t be blank'],
		match: [/\S+@\S+\.\S+/, 'is invalid'],
		index: true
	},
	/* user password */
	password: {
		type: String,
		required: [true, 'Can\'t be blank'],
		min: 6
	}
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'has already been taken.' });

/* Creates a salt and hashes password */
UserSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds), null);
};
/* Hashes password field and checks against stored password hash */
UserSchema.methods.validatePassword = function (password) {
	return bcrypt.compareSync(password, this.localPassword);
};


module.exports = mongoose.model('User', UserSchema);