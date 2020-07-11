/* MCG Registration setup/validation
 * validate email and password fields, set
 * up a new user and add to database.
 * 6/15/20
 */

const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');

const { registerValidation } = require('../reg-validation');

/* Validate the user fields and create a new user */
router.post('/register', async (req, res) => {
	const { error } = registerValidation(req, res);
	if (error) {
		return res.status(400).send('Invalid email or password');
	}

	if (req.body.password2 !== req.body.password) {
		return res.status(400).send('Your passwords need to match');
	}

	if (await User.findOne({ email: req.body.email })) {
		return res.status(400).send('Account already exists with this email');
	}

	/* create a new user */
	const user = new User();
	(user.email = req.body.email),
		/* save password hash */
		(user.password = user.generateHash(req.body.password));
	console.log(user.password);

	/* Save new user in db */
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send();
	}

	res.send('Successfully registered!');
});

module.exports = router;
