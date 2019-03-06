const promise = require("bluebird")

const options = {
  promiseLib: promise,
  query: (e) => {
    console.log(e.query) // TODO: ?
  },
}

const pgp = require("pg-promise")(options)

const connectionString = process.env.DATABASE_URL || "postgresql://ffba_180806:f__@localhost:5533/ffba_180806"
const db = pgp(connectionString)

module.exports = db
