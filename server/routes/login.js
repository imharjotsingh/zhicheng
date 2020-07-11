/* MCG login endpoint
   Take email and password input and validate them for login
   Referenced Youtuber Dev Ed's "Node.js API Authentication With JWT Tutorial"
   Zhicheng Xue
   06/14/2020
*/

const login = require('express').Router();
const { loginValidation } = require('./login_validation');
const User = require('../models/User');
const bycrpt = require('bcrypt');

login.post('/login', async (req, res) => {
	// Validate input format
	console.log('in login');
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check for existing user
	const validUser = await User.findOne({ email: req.body.email });
	if (!validUser)
		return res.status(400).send('Email or password doesn\'t exist');

	// Check for correct password
	if (!(await bycrpt.compare(req.body.password, validUser.password)))
		return res.status(400).send('Email or password is incorrect');

	return res.status(200).send('Successful login');
});

module.exports = login;
