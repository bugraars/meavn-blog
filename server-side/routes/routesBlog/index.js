//###BLOG### INDEX.JS
const express = require('express');
const router = express.Router();

router.use("/", (req, res) => {
  res.redirect("http://localhost:5173/");
});

module.exports = router;

