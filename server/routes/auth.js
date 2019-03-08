"use strict"

const router = require("express-promise-router")()
const validateBody = require("../helpers/validateBody")

const auth = require("ffba-auth")

const { req_log } = require("../controllers/dummy")
const authController = require("../controllers/auth")

router.route("/signin").post(
  req_log,
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
