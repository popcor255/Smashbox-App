< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    title > Smashbox Checkout < /title> <
    link rel = "stylesheet"
href = "../css/bootstrap/bootstrap.css" >
    <
    link rel = "stylesheet"
href = "../css/styles.css" >
    <
    script src = '../js/init.js' > < /script> <
    script src = '../js/utils/swInit.js' > < /script> <
    link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" >
    <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js" > < /script>

<
meta name = "title"
content = "Smashbox - Digital Checkout" >
    <
    meta name = "description"
content = "Shop makeup at Smashbox. Digital in-store experience." >
    <
    meta name = "keywords"
content = "Smashbox, makeup" >
    <
    meta name = "robots"
content = "index, follow" >
    <
    meta http - equiv = "Content-Type"
content = "text/html; charset=utf-8" >
    <
    meta name = "language"
content = "English" >

    <
    link rel = "manifest"
href = "../manifest.json" >

    <
    meta name = "mobile-web-app-capable"
content = "yes" >
    <
    meta name = "apple-mobile-web-app-capable"
content = "yes" >
    <
    meta name = "application-name"
content = "Smashbox Checkout" >
    <
    meta name = "apple-mobile-web-app-title"
content = "Smashbox Checkout" >
    <
    meta name = "theme-color"
content = "#ffffff" >
    <
    meta name = "msapplication-navbutton-color"
content = "#ffffff" >
    <
    meta name = "apple-mobile-web-app-status-bar-style"
content = "black-translucent" >
    <
    meta name = "msapplication-starturl"
content = "/" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" / >

    <
    link rel = "icon"
type = "image/png"
sizes = "512x512"
href = "/images/icons/icon-512x512.png" >
    <
    link rel = "apple-touch-icon"
type = "image/png"
sizes = "512x512"
href = "/images/icons/icon-512x512.png" >
    <
    link rel = "icon"
type = "image/png"
sizes = "384x384"
href = "/images/icons/icon-384x384.png" >
    <
    link rel = "apple-touch-icon"
type = "image/png"
sizes = "384x384"
href = "/images/icons/icon-384x384.png" >
    <
    link rel = "icon"
type = "image/png"
sizes = "192x192"
href = "/images/icons/icon-192x192.png" >
    <
    link rel = "apple-touch-icon"
type = "image/png"
sizes = "192x192"
href = "/images/icons/icon-192x192.png" >
    <
    link rel = "icon"
type = "image/png"
sizes = "152x152"
href = "/images/icons/icon-152x152.png" >
    <
    link rel = "apple-touch-icon"
type = "image/png"
sizes = "152x152"
href = "/images/icons/icon-152x152.png" >
    <
    /head>

<
body >
    <
    div id = "master-container" >
    <
    ul id = "title"
class = "navbar" >
    <
    li >
    <
    button id = "logo"
type = "button"
class = "btn btn-dark"
onclick = "serachAlert()" > Search < /button> <
    /li> <
    li >
    <
    a href = "/ "
class = "active " >
    <
    img class = "navbar-image "
src = "./images/small_logo.png "
alt = "smashbox " / >
    <
    /a> <
    /li> <
    /ul>

<
div class = "container " >
    <
    div id = "shopping-cart "
class = "list " >
    <
    /div> <
    /div>

<
div id = "buyer_button "
class = "buy_button " >
    <
    a href = "./payment.html " >
    <
    div id = "price "
class = "submit " > $0 .00 < /div> <
    div class = "price " > BUY < /div> <
    /a> <
    /div> <
    /div> <
    /body>

<
/htmled at http:/ / localhost: 3000
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
        from: '"Fred Foo ??" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: "Checkout ?", // Subject line
        text: text, // plain text body
        html: text // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}