const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy
const LocalStrategy = require("passport-local").Strategy
const { ExtractJwt } = require("passport-jwt")

const { JWT_SECRET } = require("@config")

const db = require("@root/db")
const { user } = require("ffba-auth")


// JSON Web Tokens strategy
passport.use(new JwtStrategy({

  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,

}, async (payload, done) => {

  try {

    console.log("payload=", payload)

    // Find the user specified in token
    const user = await User.findById(payload.sub)
    // Handle if USER doesn't exist
    if (!user) {
      // TODO: error === null ? "User not found!"
      return done(null, false)
    }
    // Otherwise, return USER
    done(null, user)

  } catch (error) {
    done(error, false)
  }
}))


// Local strategy
passport.use(new LocalStrategy({

  usernameField: "username",

}, async (username, password, done) => {

  try {

    console.log("XXX-0: username=", username, ", db=", db)

    // Find the user given the username
    const user_ = await user.findByName(db, { name: username })

    console.log("XXX-1: user=", user_)

    // If not, handle it
    if (!user_) {

      console.log("XXX-2: user=", user_)

      // TODO: error === null ? "User not found!"
      return done(null, false)
    }

    // // Check if the password is correct
    // const isMatch = await User.comparePassword(password, user.password)

    // // If not, handle it
    // if (!isMatch) {
    //   // TODO: error === null ? "Incorrect password!"
    //   return done(null, false)
    // }

    // // Otherwise, return the user
    // done(null, user)

  } catch (error) {
    done(error, false)
  }
}))



module.exports = {
  passportSignIn: passport.authenticate("local", { session: false }),
  passportJWT: passport.authenticate("jwt", { session: false }),
}
