#!/usr/bin/env nodejs

"use strict"

require("module-alias/register")

const importLazy = require("import-lazy")(require)

const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const { FFBA_SRV_PORT_DFLT } = require("./defs")

// read .env settings
require("tittles").env.config()

//
// Init DB conn - in local package
const { db } = require("./db").init()

// ... in 'ffba-auth'
require("ffba-auth").init({ db })

const route_auth = require("@routes/auth")
const route_sales = importLazy("@routes/sales")


//
// Instantiate express server
const app = express()


//
// Middleware
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.json())


//
// Routes
app.use("/auth", route_auth)
app.use("/sales", route_sales)


//
// Get port & start listening
const port = process.env.FFBA_SRV_PORT || FFBA_SRV_PORT_DFLT
app.listen(port)

console.log("Server listening on", port)
