const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");

// TODO - check if this is correct

router.get("/", function(req, res) {
  // LOGIN SCREEN
});

router.get("/user", function(req, res) {
  res.json({ user: req.user });
});

router.post("/", passport.authenticate("local"), (req, res) => {
  res.json("/profile");
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
