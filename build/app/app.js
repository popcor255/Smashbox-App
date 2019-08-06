"use strict";

const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const https = require("https");
const process = require("process");
const request = require("request");
const nodemailer = require("nodemailer");

/*
const cert = fs.readFileSync('./path/to/the/cert.crt');
const ca = fs.readFileSync('./path/to/the/ca.crt');
const key = fs.readFileSync('./path/to/the/private.key');

let httpsOptions = {
    cert: cert, // fs.readFileSync('./ssl/example.crt');
    ca: ca, // fs.readFileSync('./ssl/example.ca-bundle');
    key: key // fs.readFileSync('./ssl/example.key');
};

*/

let httpsOptions = {};
const httpsServer = https.createServer(httpsOptions, app);

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
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
        res.json(body);
    });
});

//viewed at http://localhost:3000
app.get("/catalog/:id", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/catalog.html"));
});

//viewed at http://localhost:3000
app.post("/send", function(req, res) {
    console.log(req.body);
    sendMail(req.body.email, req.body.text).catch(console.error);
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(email, text) {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "1f25fdd30d72aa",
            pass: "448a1ccafa4227"
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: "Checkout ✔", // Subject line
        text: text, // plain text body
        html: text // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

app.listen(80);