const Joi = require("joi")

const year = Joi.number().integer().min(2016).max(9999).required()
const mon = Joi.number().integer().min(1).max(12).required()
const day = Joi.number().integer().min(1).max(31).required()

const orgId = Joi.number().integer().required()
const posId = Joi.number().integer().required()


module.exports = {

  dayOrgSales: Joi.object().keys({
    year,
    mon,
    day,
    orgId,
  }),

  dayPosSales: Joi.object().keys({
    year,
    mon,
    day,
    posId,
  }),
}
