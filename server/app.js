const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");
const process = require("process");

//changes
//working with other stuff
// viewed at http://localhost:3000
//testing production branch
app.get("/api/:id", function(req, res) {
  res.sendFile(path.join(__dirname + "/manifest.json"));
});

app.use(express.static(__dirname + "/build"));

app.listen(3000, function() {
  console.log("Example app listening on port 3000");
});
