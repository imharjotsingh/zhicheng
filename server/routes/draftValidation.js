//Validation for draft course
const Joi = require("@hapi/joi");

const draftValidation = (data) => {
  const format = Joi.object({
    courseTitle: Joi.string().required(),
    subject: Joi.string(),
    academicYear: Joi.string(),
    numClass: Joi.number(),
  });
  return format.validate(data);
};

module.exports = draftValidation;
