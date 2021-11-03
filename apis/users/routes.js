const express = require("express");
const {
    signUp
} = require("./controllers");

// Create a mini express application
const router = express.Router();

router.post('/', signUp)

module.exports = router;