"use strict"

const { user, token } = require("ffba-auth")

const { db } = require("../db")


module.exports = {

  signIn: async (req, res /* , next */) => {
    try {
      // Generate token
      const token_ = token.sign(req.user)

      // Response with token
      res.status(200).json({ token_, isSuperuser: req.user.is_superuser })

    } catch (error) {

      // TODO: log error
      // https://stackoverflow.com/questions/43054203/nodejs-expressjs-how-to-log-errors-for-the-production-server

      console.error(error)

      return res.status(500).json({
        success: false,
        message: "500 - internal server error: user not signed in",
      })
    }
  },

  signUp: async (req, res/* , next */) => {

    // const { username, email, password } = req.value.body

    try {

      const result_ = await user.signUp(db, req.value.body)

      res.status(201).json({
        success: true,
        message: "New user registered",
        user: {
          id: result_.user.id,
          username: result_.user.username,
          email: result_.user.email,
        },
        token: result_.token,
      })

    } catch (e_) {
      return res.status(e_.http_code || 500).json({
        success: false,
        error: e_.message,
      })
    }
  },

  // Set password
  passwd: async (req, res/* , next */) => {

    const { username, password } = req.value.body

    try {
      const user = await User.findByUserName(username)


    } catch (error) {
      // TODO: log error
      return res.status(500).json({
        success: false,
        message: "500 - internal server error: password not set",
      })
    }


    // // Get user by USERNAME


    // if () {
    //   return res.status(422).json({
    //     success: false,
    //     error: "Username is already in use",
    //   })
    // }

    // // Check if USERNAME is already in use
    // if (await User.findByEmail(email)) {
    //   return res.status(422).json({
    //     success: false,
    //     error: "Email is already in use",
    //   })
    // }

    // // Create new user
    // try {

    //   const newUser = await User.addUser({ username, email, password })

    //   const token = signToken(newUser)

    //   // Respond with token
    //   res.status(201).json({
    //     success: true,
    //     message: "New user registered",
    //     user: {
    //       id: newUser.id,
    //       username: newUser.username,
    //       email: newUser.email,
    //     },
    //     token,
    //   })

    // } catch (error) {
    //   // TODO: log error
    //   return res.status(500).json({
    //     success: false,
    //     message: "500 - internal server error. New user not registered.",
    //   })
    // }
  },
}
