"use strict"

const moment = require("moment")

const sales = require("../sql/sales")


module.exports = {

  daily_totals_for_period: async (db, params) => {
    const date_0 = params.date0 || moment().utc().startOf("month").subtract(3, "month").toISOString()
    const date_1 = params.date1 || moment().utc().endOf("day").toISOString()
    const daily_totals = await db.any(sales.daily_totals_for_period, {
      ...params, date_0, date_1,
    })
    return { date_0, date_1, daily_totals }
  },

  day_org_sales: async (db, params) => {
    const day_sales = await db.any(sales.day_org_sales, params)
    return {
      orgunit_id: params.orgId,
      day: `${params.year}-${params.mon}-${params.day}`,
      day_sales,
    }
  },

  day_pos_sales: async (db, params) => {
    const day_sales = await db.any(sales.day_pos_sales, params)
    return {
      pos_id: params.posId,
      day: `${params.year}-${params.mon}-${params.day}`,
      day_sales,
    }
  },
}
