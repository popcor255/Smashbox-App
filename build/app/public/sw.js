/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
        "url": "catalog.html",
        "revision": "149f8cd002e94ffb7f81c45638e9e693"
    },
    {
        "url": "css/bootstrap/bootstrap-grid.css",
        "revision": "61d9bbf4f263e6231544967a8f9e4de1"
    },
    {
        "url": "css/bootstrap/bootstrap-grid.min.css",
        "revision": "61d9bbf4f263e6231544967a8f9e4de1"
    },
    {
        "url": "css/bootstrap/bootstrap-reboot.css",
        "revision": "b305550397510d92cc78873e629ea348"
    },
    {
        "url": "css/bootstrap/bootstrap-reboot.min.css",
        "revision": "20d74c101a5f158a7b2da84a181be179"
    },
    {
        "url": "css/bootstrap/bootstrap.css",
        "revision": "0f7775168ff64774f3f156e2dea8e34d"
    },
    {
        "url": "css/bootstrap/bootstrap.min.css",
        "revision": "3a51f5c12f2277eab53b1917221898b1"
    },
    {
        "url": "css/catalog.css",
        "revision": "016b5723b3fd5dd87b031bf38f071e8f"
    },
    {
        "url": "css/payment.css",
        "revision": "feef27ffe68113b2669e9db44afe236e"
    },
    {
        "url": "css/styles.css",
        "revision": "2bca5ec3c685e9221d5b21bea25d8e17"
    },
    {
        "url": "images/icons/icon-128x128.png",
        "revision": "db91c885519ed139e2102c97d52e7355"
    },
    {
        "url": "images/icons/icon-144x144.png",
        "revision": "8274b6a6a4cff0e2779f62b28a0b8508"
    },
    {
        "url": "images/icons/icon-152x152.png",
        "revision": "34948d785ce5f851d3b7c0446bec855d"
    },
    {
        "url": "images/icons/icon-192x192.png",
        "revision": "a829b1503142b8755c6c7e3c1f294162"
    },
    {
        "url": "images/icons/icon-384x384.png",
        "revision": "8dc4d6919058276220faa246b1a8671c"
    },
    {
        "url": "images/icons/icon-512x512.png",
        "revision": "1b41ff8f4cb58c1ca389f5355d01d871"
    },
    {
        "url": "images/icons/icon-72x72.png",
        "revision": "cca09df128ad85dfdcfec9a07961a8d6"
    },
    {
        "url": "images/icons/icon-96x96.png",
        "revision": "a2ff18e299574426f50b0a23cd03a201"
    },
    {
        "url": "images/mobile.jpg",
        "revision": "b959ec4ed1a9ccc80b2c7c681a67d6b0"
    },
    {
        "url": "images/qr-codes.jpg",
        "revision": "dc63ed360d5578feeaa9d3f62c3b043d"
    },
    {
        "url": "images/small_logo.png",
        "revision": "53ff13186d4604562d551f85dde9f775"
    },
    {
        "url": "images/test.jpg",
        "revision": "5a6a63dbc452761cdfa62c87b90d6521"
    },
    {
        "url": "index.html",
        "revision": "0198d73214bd43344711f65187959b95"
    },
    {
        "url": "js/app.js",
        "revision": "918340642c9030e78b79897a62ae4082"
    },
    {
        "url": "js/init.js",
        "revision": "bf5a51ca1d6bc956af201fd510b3343f"
    },
    {
        "url": "js/utils/alerts.js",
        "revision": "833381f3716f743520d6467603552ec3"
    },
    {
        "url": "js/utils/api.js",
        "revision": "ffd3e00fa1108a2f6c8bb18a563cda1b"
    },
    {
        "url": "js/utils/Cart.js",
        "revision": "7f8dab362f9aa9dc34bd8f0f5b4bb3d0"
    },
    {
        "url": "js/utils/catalog.js",
        "revision": "8087df8f7d0b9c9fd1bd6e9933858b33"
    },
    {
        "url": "js/utils/geolocation.js",
        "revision": "00831b8438d0c8c7cd57c916e6acd1c9"
    },
    {
        "url": "js/utils/loadImage.js",
        "revision": "3858972857ab56fdccd05e1a6669c12a"
    },
    {
        "url": "js/utils/mailer.js",
        "revision": "3ebd72ba1c1c5209d11d8652fe7766c2"
    },
    {
        "url": "js/utils/sweetalert.min.js",
        "revision": "0068f44b0aa1b83fa7679860ceb26590"
    },
    {
        "url": "js/utils/swInit.js",
        "revision": "b813fc2b0fa2c968fb8d87bdc879be9e"
    },
    {
        "url": "js/utils/swPrompt.js",
        "revision": "1953842616d7a995dda842b22c30e32f"
    },
    {
        "url": "payment.html",
        "revision": "78907dfaf11c8b70671fcb54c84584fd"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/http:\/\/localhost\/smashbox\/product_type\//, new workbox.strategies.CacheFirst({ "cacheName": "my-api-cache", "fetchOptions": { "mode": "no-cors" }, "matchOptions": { "ignoreSearch": true }, plugins: [new workbox.expiration.Plugin({ maxEntries: 5, maxAgeSeconds: 60, purgeOnQuotaError: false }), new workbox.backgroundSync.Plugin("myQueueName", { maxRetentionTime: 36000 }), new workbox.cacheableResponse.Plugin({ statuses: [0, 200], headers: { 'x-test': 'true' } }), new workbox.broadcastUpdate.Plugin({ channelName: 'my-update-channel' })] }), 'GET');

const queue = new workbox.backgroundSync.Queue('myQueueName');

self.addEventListener('fetch', (event) => {
    // Clone the request to ensure it's safe to read when
    // adding to the Queue.
    const promiseChain = fetch(event.request.clone())
        .catch((err) => {
            return queue.pushRequest({ request: event.request });
        });

    event.waitUntil(promiseChain);
});