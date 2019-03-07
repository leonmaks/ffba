"use strict"

const moment = require("moment")

const sales = require("../sql/sales")


module.exports = {

  daily_totals_for_period: async (db, params) => {

    const date_0 = params.date0 || moment().utc().startOf("month").subtract(2, "month").toISOString()
    const date_1 = params.date1 || moment().utc().endOf("day").toISOString()

    const daily_totals = await db.any(sales.daily_totals_for_period, {
      ...params, date_0, date_1,
    })

    return { date_0, date_1, daily_totals }
  },
}
