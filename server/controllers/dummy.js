

module.exports = {

  dummy: async (req, res) => {

    console.log("Dummy: req=", req)
    return res.status(200).json({
      success: true,
      message: "200 - dummy OK",
    })


    // try {
    //   const data_ = await Sales.dailyTotalsForPeriod()
    //   return res.status(200).json({
    //     success: true,
    //     data: {
    //       date_0: date0_,
    //       date_1: date1_,
    //       daily_totals: data_,
    //     },
    //   })
    // } catch (error) {
    //   // TODO: log error
    //   return res.status(500).json({
    //     success: false,
    //     message: "500 - internal server error. New user not registered.",
    //   })
    // }
  },
}
