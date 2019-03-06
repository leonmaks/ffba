const router = require("express-promise-router")()

// const { signUpSchema, signInSchema } = require("@schemas/auth")

// const validateBody = require("@services/validateBody")
const { passportJWT } = require("@services/passport")

const salesController = require("@controllers/sales")

// const dummy = require("@controllers/dummy")


router.route("/daily-totals-for-period-api")
  // .get(passportJWT, dummy.dummy)
  .get(passportJWT, salesController.dailyTotalsForPeriod_api)


module.exports = router
