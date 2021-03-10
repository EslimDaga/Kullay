const express = require("express");
const router = express.Router();
const con = require("../../database");

router.get("/signin", (req, res) => {
  res.send("Signin");
});

router.get("/signup", (req, res) => {
  res.send("Signup")
});

module.exports = router;