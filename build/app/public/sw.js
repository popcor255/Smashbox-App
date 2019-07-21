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
self.__precacheManifest = [
  {
    "url": "catalog.html",
    "revision": "bd44bde757182ebf09f7dd96cffa74ff"
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
    "revision": "c9a568c98783a76c69cf71af454fe962"
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
    "revision": "a0a441d3d73b9f371c18434d3ff0cb05"
  },
  {
    "url": "js/init.js",
    "revision": "333a8345608b05cc7a02f88d7144acbb"
  },
  {
    "url": "js/utils/alerts.js",
    "revision": "833381f3716f743520d6467603552ec3"
  },
  {
    "url": "js/utils/api.js",
    "revision": "d45eaeeee3827be7f887b2e185c1d804"
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
    "url": "js/utils/swPrompt.js",
    "revision": "5ec934789ca19dd86a8cfb0dccbe6947"
  },
  {
    "url": "payment.html",
    "revision": "eadb6d57894fdfc4590e4b3a70367f78"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
