"use strict"

const sales = require("../dal/sales")

const { db } = require("../db")


module.exports = {

  daily_totals_for_period: async (req, res) => {

    try {
      const data_ = await sales.daily_totals_for_period(db, {
        // TODO: pass date0, date1 through req
        // date0: ...
        // date1: ...
      })

      return res.status(200).json({
        ...data_,
        success: true,
      })

    } catch (error) {
      // TODO: log error
      return res.status(500).json({
        success: false,
        message: "500 - internal server error",
      })
    }
  },

  day_org_sales: async (req, res) => {
    try {
      const data_ = await sales.day_org_sales(db, req.params)
      return res.status(200).json({
        ...data_,
        success: true,
      })
    } catch (error) {
      // TODO: log error
      return res.status(500).json({
        success: false,
        message: "500 - internal server error",
      })
    }
  },

  day_pos_sales: async (req, res) => {
    try {
      const data_ = await sales.day_pos_sales(db, req.params)
      return res.status(200).json({
        ...data_,
        success: true,
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
