Cart.init();

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
    var list = document.getElementsByClassName("list")[0];
    catalog = JSON.parse(catalog);
    for (i = 0; i < catalog.length; i++) {
        list.innerHTML += ("<div onclick='promptItem(this)' class='card-container'>" +
            "<a href='#' class='item_card'>" +
            "<img class='card-cover' src='" + falsey(catalog[i].image_link) + "' alt='test image' />" +
            "<div class='header'>" +
            "<h3 class='item-card item-text'><b>" + falsey(catalog[i].name) + "</b></h3>" +
            "<p class='item-card item-text price-text'>$" + falsey(catalog[i].price) + "</p>" +
            "</div>" +
            "</a>" +
            "</div>");

    }
}

function promptItem(item) {
    item = schemeify(item);

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
}


function schemeify(item) {
    var obj = {};
    var phrase = item.childNodes[0].text.split("$");
    var name = phrase[0];
    var price = phrase[1];
    var img = item.getElementsByClassName('card-cover')[0].src;

    obj = {
        "name": name,
        "price": price,
        "img": img
    }

    return obj;
}

async function addItem(item) {
    await Cart.addItem({
        id: Cart.items.length,
        name: item.name,
        price: item.price,
        img: item.img
    });
}

function falsey(value) {
    if (value) {
        return value;
    }

    return "";
}