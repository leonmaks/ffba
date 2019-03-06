const auth = "@controllers/auth"

module.exports = app => {

  app.post("/signup", (req, res, next) => auth.signUp(req, res, next))
}
