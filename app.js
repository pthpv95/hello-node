var express = require("express");
var sql = require("mssql");
var http = require("http");
var app = express();

var port = process.env.PORT || 8000;
var config = {
  server: "localhost\\SQLEXPRESS",
  database: "GCM",
  user: "sa",
  password: "Palomino1!",
  port: 1433
};

sql.connect(config).then(() => {
  new sql.Request()
    .query("select * from agents")
    .then(function(dbData) {
      if (dbData == null || dbData.length === 0) return;
      console.dir(dbData);
    })
    .catch(function(error) {
      console.dir(error);
    });
});

app.listen(8000);
console.log(port + " is the magic port");
