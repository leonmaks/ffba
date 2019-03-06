const DB_OBJ_PFX = "ffba"
const USER_DB_TABLE = `${DB_OBJ_PFX}_auth_user`



module.exports = {

  APP_ID: "FFBA",
  FFBA_SRV_PORT_DFLT: 3099,

  USER_DB_TABLE,

  TOKEN_EXP_DAYS: 40,
  JWT_SECRET: "1lv039s&v3-!a3b#*2&0^e%yi1yn6ar-7l!uz8x=jkuhmse+m#",
  BCRYPT_SALT_ROUNDS: 10,
}
