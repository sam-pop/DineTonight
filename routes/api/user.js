const router = require("express").Router();
const passport = require("../../config/passport");
const auth = require("../../config/middleware/auth");
const db = require("../../models");

/*
Routes match with "/user/*"
*/

// authenticate user
router.get("/auth", auth.isAuthenticated, (req, res) => {
  if (!req.user) res.redirect("/login");
  else res.json(true);
});

// user login
router.post("/login", passport.authenticate("local"), (req, res) => {
  if (!req.user) res.redirect("/login");
  else res.redirect("/profile");
});

// user signup
router.post("/signup", (req, res) => {
  db.User.create(req.body)
    .then(dbUser => {
      res.redirect(307, "/login");
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// test user active session
router.get("/user", function(req, res) {
  res.json({ user: req.user });
});

// user profile
router.get("/profile", auth.isAuthenticated, (req, res) => {
  db.User.find({ email: req.user.email }).then(dbUser => {
    res.json({ user: dbUser });
  });
});

// logout user
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
