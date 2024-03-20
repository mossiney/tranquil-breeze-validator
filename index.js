// index.js for tranquil-breeze-validator
const Joi = require('joi');
const validator = require('validator');
const isEmail = require('isemail');

const validateEmail = (email) => {
  // Uses isEmail for a simple email check
  return isEmail.validate(email, {errorLevel: false});
};

const validatePassword = (password) => {
  // Uses Joi for complex validations
  const schema = Joi.string().min(8).max(30).alphanum();
  return schema.validate(password);
};

const validateUsername = (username) => {
  // Uses validator for string checks
  return validator.isAlphanumeric(username) && username.length >= 4 && username.length <= 20;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateUsername
};
