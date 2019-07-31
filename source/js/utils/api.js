Cart.init();

function cacheRequest() {

    var items = ["blush", "bronzer", "eyebrow", "eyeliner", "eyeshadow", "foundation", "lipliner", "lipstick", "mascara", "nailpolish"];

    for (var i = 0; i < items.length; i++) {
        getRequest("http://localhost/smashbox/product_type/" + items[i], function(response) {
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

cacheRequest();

function getRequest(url, callback) {
    // How can I use this callback?
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(JSON.parse(request.responseText)); // Another callback here
        }
    };
    request.open("GET", url);
    request.send();
}

function getProducts(name) {
    getRequest("http://localhost/smashbox/product_type/" + name, loadItems);
}


function loadItems(catalog) {
    var list = document.getElementsByClassName("list")[0];
    catalog = JSON.parse(catalog);
    for (i = 0; i < catalog.length; i++) {
        list.innerHTML += ("<div class='card-container'>" +
            "<a href='javascript:promptItem(this)' class='item_card'>" +
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
    swal({
        title: 'Are you sure you want to add this to cart?',
        text: "This will add the item to the cart",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        addItem(item);
    })
}

function addItem(item) {
    Cart.addItem({
        id: item
    });
}

function falsey(value) {
    if (value) {
        return value;
    }

    return "";
}