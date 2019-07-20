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
    "url": "css/payment.css",
    "revision": "feef27ffe68113b2669e9db44afe236e"
  },
  {
    "url": "css/styles.css",
    "revision": "722d5b107bd5bf3fb8c68ed509a2ee0d"
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
    "revision": "3933e6ea989eaca3ce159b97625a6fac"
  },
  {
    "url": "js/init.js",
    "revision": "d85ce60ad091ccfc715b6d07a14b11fb"
  },
  {
    "url": "js/utils/alerts.js",
    "revision": "896a22bf0435819b520aa4ab8a8ea644"
  },
  {
    "url": "js/utils/api.js",
    "revision": "a0e9e0ff373968b4f19ea7f081e5038d"
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
    "revision": "045e41818b3fc4fa62534c7322c50581"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
