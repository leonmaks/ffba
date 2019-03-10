"use strict"

const router = require("express-promise-router")()
const { validateParams } = require("../helpers/schema")

const { passport } = require("ffba-auth")
const sales = require("../controllers/sales")
const { dayOrgSales, dayPosSales } = require("../schemas/sales")


router.route("/daily-totals-for-period").get(
  // req_log,
  passport.JWT,
  sales.daily_totals_for_period
)


router.route("/day/:year-:mon-:day/org/:orgId").get(
  // req_log,
  validateParams(dayOrgSales),
  passport.JWT,
  sales.day_org_sales
)


router.route("/day/:year-:mon-:day/pos/:posId").get(
  // req_log,
  validateParams(dayPosSales),
  passport.JWT,
  sales.day_pos_sales
)


module.exports = router




// date-cashreg/2019/3/10/5/
// un_.link = "/sales/date-pos/" + r["sales_date"].replace(/-/g, "/") + "/" + r["pos_id"]
// { year: '2019', mon: '03', day: '10', orgId: '1' }
