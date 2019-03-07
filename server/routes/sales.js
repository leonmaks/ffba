"use strict"

const router = require("express-promise-router")()
// ?? const validateBody = require("../helpers/validateBody")

const { passport } = require("ffba-auth")

const salesController = require("../controllers/sales")


router.route("/daily-totals-for-period").get(
  passport.JWT,
  salesController.daily_totals_for_period
)


module.exports = router
