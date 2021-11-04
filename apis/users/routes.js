const express = require("express");
const passport = require("passport")
const {
    signUp,
    signIn
} = require("./controllers");

// Create a mini express application
const router = express.Router();

router.post("/signup", signUp)

router.post("/login", passport.authenticate("local", {session: false}) , signIn)

module.exports = router;