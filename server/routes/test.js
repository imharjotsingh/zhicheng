//test route

const test = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

//Create a simple user model for testing
// const schema = new mongoose.Schema({
//     email: String,
//     password: String
// });

// const testUser = mongoose.model('testUser', schema);

//create and upload user examples for testing
test.post('/test', async (req, res) => {
	const saltRounds = 16;
	const salt = await bcrypt.genSaltSync(saltRounds);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const testUser = new User({
		email: req.body.email,
		password: hashedPassword
	});
	try {
		const savedUser = await testUser.save();
		res.send(savedUser);
	}
	catch (err) {
		res.status(400).send(err);
	}
}
);

module.exports = test;