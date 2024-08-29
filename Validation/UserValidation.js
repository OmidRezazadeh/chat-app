const Joi = require('joi');

// Define the validation schema
const registerValidation = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
});

module.exports = registerValidation;
