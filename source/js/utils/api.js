function getRequest(url, callback) {
  // How can I use this callback?
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.responseText); // Another callback here
    }
  };
  request.open("GET", url);
  request.send();
}

function getProduct(name, cb) {
  getRequest("http://localhost/smashbox/product_type/" + name, mycallback);
}
