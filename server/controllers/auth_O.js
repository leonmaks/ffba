const jwt = require("jsonwebtoken")
const User = require("../models/user")
const { JWT_SECRET } = require("../config")

const signToken = user => {
  return jwt.sign({
    iss: "LABS",
    sub: user.id,
    iat: new Date().getTime(), // current datetime
    exp: new Date().setDate(new Date().getDate() + 1), // current datetime + 1 day
  }, JWT_SECRET)
}

module.exports = {

  // Register NEW User
  signUp: async (req, res, next) => {
    console.log("controllers.auth.signUp() called")
    res.send({ success: true })

    // // Extract form data
    // const { username, email, password } = req.value.body

    // console.log("username", username)
    // console.log("email", email)
    // console.log("password", password)

    // // Check if USERNAME is already in use
    // if (await User.findByUserName(username)) {
    //   return res.status(403).json({
    //     success: false,
    //     error: "Username is already in use",
    //   })
    // }

    // // Check if EMAIL is already in use
    // if (await User.findByEmail(email)) {
    //   return res.status(403).json({
    //     success: false,
    //     error: "Email is already in use",
    //   })
    // }

    // const newUser = { username, email, password }

    // User.addUser(newUser)
    //   .then(user => {

    //     const token = signToken(user)

    //     // TODO: respond with token
    //     res.status(201).json({
    //       success: true,
    //       message: "NEW user registered",
    //       user: {
    //         id: user.id,
    //         username: user.username,
    //         email: user.email,
    //       },
    //       token,
    //     })
    //   })
    //   .catch(err => console.error(err))

    // // res.json({ user: "created" })

  },
  // signIn: async (req, res, next) => {
  //   // Generate token
  //   const token = signToken(req.user)

  //   // Response with token
  //   res.status(200).json({ token })
  // },

  // secret: async (req, res, next) => {
  //   console.log("I managed to get here!")
  //   res.json({ secret: "resource" })
  // },
}
