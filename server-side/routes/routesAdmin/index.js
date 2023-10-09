//###ADMİN### INDEX.JS
const express = require('express');
const router = express.Router();

router.use("/", (req, res) => {
  res.redirect("http://localhost:4200/admin");
});


module.exports = router;
