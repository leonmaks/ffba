const Joi = require("joi")


const usernamePattern = Joi.string().regex(/^[_a-zA-Z0-9]{2,50}$/).required()
const emailPattern = Joi.string().email({ minDomainAtoms: 2 }).required()
const passwordPattern = Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()


module.exports = {

  signUpSchema: Joi.object().keys({
    username: usernamePattern,
    email: emailPattern,
    password: passwordPattern,
  }),

  signInSchema: Joi.object().keys({
    username: usernamePattern,
    password: passwordPattern,
  }),
}
