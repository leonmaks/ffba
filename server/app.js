"use strict"

require("module-alias/register")

const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const { FFBA_SRV_PORT_DFLT } = require("./defs")

// read .env settings
require("tittles").env.config()

// Init DB connection
const { db } = require("./db")()
require("ffba-auth").init({ db })

const auth = require("@routes/auth")

const app = express()


// Middleware
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.json())


//
// Routes
//

app.use("/auth", auth)

// app.use("/sales", require("@routes/sales"))


// Get port & start listening
const port = process.env.FFBA_SRV_PORT || FFBA_SRV_PORT_DFLT
app.listen(port)


console.log("Server listening on", port)
