"use strict"


module.exports = {

  req_log: async (req, res, next) => {
    console.log("REQ:", req)
    next()
  },
}
