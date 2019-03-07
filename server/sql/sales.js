"use strict"

const path = require("path")
const { stmt } = require("pg-utl")

module.exports = {

  daily_totals_for_period: stmt(path.join(__dirname, "sales/daily_totals_for_period.sql")),
}
