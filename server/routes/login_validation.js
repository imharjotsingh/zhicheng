//Validation for login
const Joi = require('@hapi/joi');

const loginValidation = (data) => {
	const format = Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string().required(),
	});
	return format.validate(data);
};

module.exports.loginValidation = loginValidation;
