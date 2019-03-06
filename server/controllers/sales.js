const Sales = require("@db/queries/sales")


module.exports = {

  dailyTotalsForPeriod_api: async (req, res) => {
    // TODO: pass date0 & date1 through parameters
    const date0_ = null
    const date1_ = null
    try {
      const data_ = await Sales.dailyTotalsForPeriod()

      // Convert datetime into ISO format date part
      data_.forEach(r_ => {
        r_.sales_date = r_.sales_date.toISOString().slice(0, 10)
      })

      return res.status(200).json({
        success: true,
        date_0: date0_,
        date_1: date1_,
        daily_totals: data_,
      })
    } catch (error) {
      // TODO: log error
      return res.status(500).json({
        success: false,
        message: "500 - internal server error. New user not registered.",
      })
    }
  },
}
