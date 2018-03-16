var express = require("express");
var router = express.Router();
// var DBUtil = require('../common/db-util');

router.get('/', (req, res) => {
  res.send("Get request to the home page");
});

module.exports = router;
