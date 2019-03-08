"use strict"

const router = require("express-promise-router")()
// ?? const validateBody = require("../helpers/validateBody")

const { passport } = require("ffba-auth")

const salesController = require("../controllers/sales")
// const { req_log } = require("../controllers/dummy")


router.route("/daily-totals-for-period").get(
  // req_log,
  passport.JWT,
  salesController.daily_totals_for_period
)


module.exports = router
