Cart.init();

var shoppingcart = document.getElementById("shopping-cart");

function loadCart() {

    var total = 0;

    for (var i = 0; i < Cart.items.length; i++) {
        shoppingcart.innerHTML += Card(Cart.items[i]);
        total += parseInt(Cart.items[i].price);
    }

    var price = document.getElementById("price");

    if (price) {
        price.innerText = "$" + total + ".00";
    }
}

if (shoppingcart) {
    loadCart();
}

function cacheRequest() {

    var items = ["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lipliner", "lipstick", "mascara", "nailpolish"];

    for (var i = 0; i < items.length; i++) {
        var path = "http://localhost/smashbox/product_type/" + items[i];
        if (validation(path)) {
            getRequest(path, function(response) {
                response = JSON.parse(response);
                for (var j = 0; j < response.length; j++) {
                    loadImg({ src: response[j].image_link, maxSeconds: 10 }, function(status) {
                        if (status.err) {
                            // handle error
                            console.log("failed to load image");
                            return;
                        }
                        console.log("image loaded");
                        // you got the img within status.img
                    });
                }
            });
        }
    }
}

cacheRequest();

function validation(entry) {
    var items = ["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lipliner", "lipstick", "mascara", "nailpolish"];
    var url = "http://localhost/smashbox/product_type/";

    for (var i = 0; i < items.length; i++) {
        if (url + items[i] === entry) {
            return true;
        }
    }

    return false;
}

function getRequest(url, callback) {
    // How can I use this callback?
    if (validation(url)) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    callback(JSON.parse(request.responseText)); // Another callback here
                }
            }
        };

        request.open("GET", url);
        request.send();
    } else {
        callback(undefined);
    }
}

function getProducts(name) {
    getRequest("http://localhost/smashbox/product_type/" + name, loadItems);
}


function loadItems(catalog) {
    var price = 0;
    var list = document.getElementsByClassName("list")[0];
    catalog = JSON.parse(catalog);
    for (i = 0; i < catalog.length; i++) {
        catalog[i].price += "0";
        list.innerHTML += Card(catalog[i]);
    }
}

function Card(item) {
    return ("<div onclick='promptItem(this)' class='card-container'>" +
        "<a href='#' class='item_card'>" +
        "<img class='card-cover' src='" + falsey(item.image_link) + "' alt='test image' />" +
        "<div class='header'>" +
        "<h3 class='item-card item-text'><b>" + falsey(item.name) + "</b></h3>" +
        "<p class='item-card item-text price-text'>$" + falsey(item.price) + "</p>" +
        "</div>" +
        "</a>" +
        "</div>");
}

function promptItem(item) {
    item = schemeify(item);
    var shoppingcart = document.getElementById("shopping-cart");

    if (!shoppingcart) {
        swal({
                title: 'Are you sure you want to add this to cart?',
                text: "This will add the item to the cart",
                type: 'warning',
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            },
            function() {
                addItem(item);
            }
        );
    } else {
        swal({
                title: 'Are you sure you want to remove this to cart?',
                text: "This will remove the item to the cart",
                type: 'warning',
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            },
            function() {
                removeItem(item);
            }
        );
    }
}

function schemeify(item) {
    var obj = {};
    var phrase = item.childNodes[0].text.split("$");
    var name = phrase[0];
    var price = phrase[1];
    var image_link = item.getElementsByClassName('card-cover')[0].src;

    obj = {
        "name": name,
        "price": price,
        "image_link": image_link
    };

    return obj;
}

async function addItem(item) {
    await Cart.addItem({
        id: Cart.items.length,
        name: item.name,
        price: item.price,
        image_link: item.image_link
    });
}

async function removeItem(item) {

    for (var i = 0; i < Cart.items.length; i++) {
        if (Cart.items[i].name == item.name) {
            Cart.items.splice(i, 1);
            Cart.save();
            location.reload();
            return true;
        }
    }

    return false;
}

function falsey(value) {
    if (value) {
        return value;
    }

    return "";
}