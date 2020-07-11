/* MCG Registration validation.
 * Validates new user's email/password
 * 6/15/20
 */

const Joi = require('@hapi/joi');

/* set validation format */
const schema = Joi.object().keys({
	email: Joi.string().required().email()
		.messages({
			'string.base': '"email" should be a type of text.',
			'string.empty': '"email" cannot be left empty.',
			'string.email': '"email" needs to be a valid email.'
		}),
	password: Joi.string().required().min(6).
	/* Must contain one lowercase one uppercase and one digit */
		regex(/(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/).messages({
			'string.base': '"password" should be a type of text.',
			'string.empty': '"password" cannot be left empty.',
			'string.min': '"password" needs to be a minimum of {#limit} characters',
		}),
	password2: Joi.string()
});

/* Validation based on the schema */
const registerValidation = (req, res) => {
	 return schema.validate(req.body);
}

exports.registerValidation = registerValidation;
