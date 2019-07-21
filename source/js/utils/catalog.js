
var rel_url = getUrlParts(window.location.href);
rel_url = rel_url.pathname.replace("/catalog/", "");
getProducts(rel_url);


function getUrlParts(url) {
    var a = document.createElement('a');
    a.href = url.replace("/catalog.html", "");

    return {
        href: a.href,
        host: a.host,
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname,
        protocol: a.protocol,
        hash: a.hash,
        search: a.search
    };
}