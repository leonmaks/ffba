const bcrypt = require("bcryptjs")

const db = require("@db")
const { USER_DB_TABLE, BCRYPT_SALT_ROUNDS } = require("@config")

// Password hash generator
const genPasswordHash = async password => bcrypt.hash(password, await bcrypt.genSalt(BCRYPT_SALT_ROUNDS))


// EMPTY USER OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const User = {}

// Finders
User.findById = async id => db.oneOrNone(`SELECT * FROM ${USER_DB_TABLE} WHERE id = $1`, id)
User.findByUserName = async username => db.oneOrNone(`SELECT * FROM ${USER_DB_TABLE} WHERE username = $1`, username)
User.findByEmail = async email => db.oneOrNone(`SELECT * FROM ${USER_DB_TABLE} WHERE email = $1`, email)

// Set password
User.setPassword = async user => db.one(
  `UPDATE ${USER_DB_TABLE}
    SET password = $2
    WHERE username = $1`,
  [user.username, await genPasswordHash(user.password)],
)

// Add new user
User.addUser = async user => db.one(
  `INSERT INTO ${USER_DB_TABLE}
    (username, password, email)
    VALUES ($1, $2, $3) RETURNING *`,
  [user.username, await genPasswordHash(user.password), user.email],
)

// COMPARE PASSWORD WHEN LOGGING IN
User.comparePassword = async (candidatePassword, hash) => bcrypt.compare(candidatePassword, hash)
//   try {
//     return await bcrypt.compare(candidatePassword, hash)
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// VALIDATE EMAIL USING REGEX
// User.validateEmail = email => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

module.exports = User
