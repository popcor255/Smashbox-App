Cart.init();

var shoppingcart = document.getElementById("shopping-cart");
var checkout = document.getElementById("item-container");
var total = 0;
var toggled = false;

function loadCart() {

    var shoppingcart = document.getElementById("shopping-cart");
    shoppingcart.innerHTML = "";
    total = 0;

    if (Cart.items.length == 0) {
        shoppingcart.innerHTML = "<h1 style='margin: 8% auto;'> Your cart is empty </h1>";
        var checkout_button = document.getElementById("buyer_button");
        checkout_button.style.display = "none";
    } else {
        shoppingcart.innerHTML = "";
        var checkout_button = document.getElementById("buyer_button");
        checkout_button.style.display = "inherit";
    }

    for (var i = 0; i < Cart.items.length; i++) {
        shoppingcart.innerHTML += Card(Cart.items[i]);
        total += parseInt(Cart.items[i].price);
    }

    var price = document.getElementById("price");

    if (price) {
        price.innerText = " $" + total + ".00";
    }
}

function checkoutCart() {
    var checkout = document.getElementById("item-container");
    total = 0;

    for (var i = 0; i < Cart.items.length; i++) {
        checkout.innerHTML += paymentItem(Cart.items[i]);
        total += parseInt(Cart.items[i].price);
    }

    var price = document.getElementById("price");

    if (price) {
        price.innerText = " $" + total + ".00";
    }
}

function toggleTotalBy(amount) {
    if (!toggled) {
        total += 3;
    } else {
        total -= 3;
    }

    var price = document.getElementById("price");

    if (price) {
        price.innerText = " $" + total + ".00";
    }

    toggled = !toggled;
}

function paymentItem(item) {
    return ('<div class="item">' +
        '<span class="price">' + falsey(item.price) + '</span>' +
        '<p class="item-name">' + falsey(item.name) + '</p>' +
        '</div>');
}

function cacheRequest() {

    var items = ["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lipliner", "lipstick", "mascara", "nailpolish"];

    for (var i = 0; i < items.length; i++) {
        var path = "/smashbox/product_type/" + items[i];
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
    var url = "/smashbox/product_type/";

    for (var i = 0; i < items.length; i++) {
        if (url + items[i] === entry) {
            return true;
        }
    }

    return false;
}

function getRequest(url, callback) {
    // How can I use this callback?
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

}

function getProducts(name) {
    getRequest("/smashbox/product_type/" + name, loadItems);
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
                title: 'This is added to your cart',
                text: "Click cancel to Undo",
                type: 'success',
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonText: 'Ok',
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
                title: 'Are you sure you want to remove this from the cart?',
                text: "This will remove the item from the cart",
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
            loadCart();
            return true;
        }
    }

    return false;
}

window.post = function(url, data) {
    var formBody = [];
    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })

}

function postCart(url) {
    //  This gives you an HTMLElement object
    var element = document.getElementById('form');
    //  This gives you a string representing that element and its content
    var html = element.outerHTML;
    //  This gives you a JSON object that you can send with jQuery.ajax's `data`
    // option, you can rename the property to whatever you want.
    var data = { text: html, email: 'checkout@smashbox.com' };
    //  This gives you a string in JSON syntax of the object above that you can 
    // send with XMLHttpRequest.
    post(url, data);

    swal({
            title: 'Are you sure you want to checkout?',
            text: "You will be taken back to the home page.",
            type: 'success',
            showCancelButton: true,
            closeOnConfirm: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        },
        function() {
            Cart.empty();
            window.location.href = '/';
        }
    );
}

function falsey(value) {
    if (value) {
        return value;
    }

    return "";
}

//laod Cart
if (shoppingcart) {
    loadCart();
}

//Checkout
if (checkout) {
    checkoutCart();
}