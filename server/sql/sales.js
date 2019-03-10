"use strict"

const path = require("path")
const { stmt } = require("pg-utl")

module.exports = {

  daily_totals_for_period: stmt(path.join(__dirname, "sales/daily_totals_for_period.sql")),
  day_org_sales: stmt(path.join(__dirname, "sales/day_org_sales.sql")),
  day_pos_sales: stmt(path.join(__dirname, "sales/day_pos_sales.sql")),
}
