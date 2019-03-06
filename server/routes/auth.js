"use strict"

const router = require("express-promise-router")()
const validateBody = require("@helpers/validateBody")

const auth = require("ffba-auth")

const authController = require("../controllers/auth")

// const { db } = require("../db")

// let passport
// let userSchema

// const { passportSignIn, passportJWT } = require("@services/passport")(1)

// const authController = require("@controllers/auth")

router.route("/signin").post(
  validateBody(auth.userSchema.signIn),
  auth.passport.local,
  authController.signIn
)

router.route("/signup").post(
  validateBody(auth.userSchema.signUp),
  auth.passport.JWT,
  authController.signUp
)

// TODO: delete
// router.route("/secret")
//   .get(passportJWT, UsersController.secret)


module.exports = router
