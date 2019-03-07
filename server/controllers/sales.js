"use strict"

const moment = require("moment")

const sales = require("@dal/sales")

const { db } = require("../db")


module.exports = {

  daily_totals_for_period: async (req, res) => {

    // TODO: pass date0 & date1 through req
    const date0 = moment().utc().startOf("month").subtract(2, "month")
    const date1 = moment().utc().endOf("day")

    try {
      const data_ = await sales.daily_totals_for_period(db, {
        date0,
        date1,
      })

      // Convert datetime into ISO format date part
      // data_.forEach(r_ => {
      //   r_.sales_date = r_.sales_date.toISOString().slice(0, 10)
      // })

      return res.status(200).json({
        success: true,
        date_0: date0,
        date_1: date1,
        daily_totals: data_,
      })

    } catch (error) {
      // TODO: log error
      return res.status(500).json({
        success: false,
        message: "500 - internal server error",
      })
    }
  },
}
