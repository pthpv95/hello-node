var express = require("express");
var router = express.Router();
var config = require("../db");

exports.index = (req, res) => {
  console.log("GET Request");
  res.send("Hello get");
};
