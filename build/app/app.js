const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const https = require("https");
const process = require("process");

//viewed at http://localhost:3000

app.use(express.static(__dirname + "/public"));

//viewed at http://localhost:3000
app.get("/api/:id", function(req, res) {
  res.sendFile(path.join(__dirname + "/manifest.json"));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000");
});
