const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const https = require("https");
const process = require("process");
const request = require("request");

//viewed at http://localhost:3000

app.use(express.static(__dirname + "/public"));

//viewed at http://localhost:3000
app.get("/api/:id", function(req, res) {
  res.sendFile(path.join(__dirname + "/manifest.json"));
});

app.get("/smashbox/product_type/:id", function(req, res, next) {
  request("http://api:3001/smashbox/product_type/" + req.params.id, function(
    error,
    response,
    body
  ) {
    console.log(body);
    res.json(body);
  });
});

app.listen(80, function() {
  console.log("Example app listening on port 80");
});
