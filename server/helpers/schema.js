"use strict"

const Joi = require("joi")

module.exports = {

  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema)
      if (result.error) {
        // TODO: +user friendly error log
        return res.status(400).json(result.error)
      }
      if (!req.value) req.value = {}
      req.value.body = result.value
      next()
    }
  },

  validateParams: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.params, schema)
      if (result.error) {
        // TODO: +user friendly error log
        return res.status(400).json(result.error)
      }
      if (!req.value) req.value = {}
      req.value.params = result.value
      next()
    }
  },
}
