var express = require("express");
var request = require("request");
var router = express.Router();

/* GET users listing. */
router.get("/product_type/:id", function(req, res, next) {
    request(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox&product_type=" +
        req.params.id,
        function(error, response, body) {
            res.status(200).send(body);
        }
    );
});

module.exports = router;