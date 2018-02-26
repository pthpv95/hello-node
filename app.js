var express = require("express");
var sql = require("mssql");
var http = require("http");
var app = express();
var db = require('./db');

var port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Get request to the home page");
});

app.get("/customers", (req, res) => {
  sql.connect(db.config).then(() => {
    new sql.Request()
      .query("select * from Customers")
      .then(function(dbData) {
        if (dbData == null || dbData.length === 0) return;
        res.send(dbData.recordsets[0]);
        sql.close();
      })
      .catch(function(error) {
        console.dir(error);
        sql.close();
      });
  });
});

app.listen(port);