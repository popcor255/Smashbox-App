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
    "revision": "dcdf6620fd0a145a8b2fd50532cccd91"
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
    "url": "images/mobile/AppIcon24x24@2x.png",
    "revision": "095fc8b5cfc3d98044850726aa32fb5b"
  },
  {
    "url": "images/mobile/AppIcon27.5x27.5@2x.png",
    "revision": "3275b8917e0e1fd9118442027ce4b70c"
  },
  {
    "url": "images/mobile/AppIcon40x40@2x.png",
    "revision": "03589301a28896194902a4af96a0e036"
  },
  {
    "url": "images/mobile/AppIcon44x44@2x.png",
    "revision": "66fc5984ec13df9669584300bb97a18c"
  },
  {
    "url": "images/mobile/AppIcon86x86@2x.png",
    "revision": "4ed8d3018a2fed6fa04bcf86b052388b"
  },
  {
    "url": "images/mobile/AppIcon98x98@2x.png",
    "revision": "fe6a11d45836b46f7839b1066716d1e9"
  },
  {
    "url": "images/mobile/GooglePlayStore.png",
    "revision": "497afd210fd662d714df08b7211b4907"
  },
  {
    "url": "images/mobile/hdpi.png",
    "revision": "6a22efde79ac1b387890a62679db9529"
  },
  {
    "url": "images/mobile/Icon-60@2x.png",
    "revision": "28f7a99be4437282a19b1b042af45eea"
  },
  {
    "url": "images/mobile/Icon-60@3x.png",
    "revision": "69f640181653241ecd82c4fed99d63ff"
  },
  {
    "url": "images/mobile/Icon-72.png",
    "revision": "6a22efde79ac1b387890a62679db9529"
  },
  {
    "url": "images/mobile/Icon-72@2x.png",
    "revision": "80cd1e868e78f0cae2f06e5eea2f151d"
  },
  {
    "url": "images/mobile/Icon-76.png",
    "revision": "e7f6ed5f54428c2956b7690692f17fd2"
  },
  {
    "url": "images/mobile/Icon-76@2x.png",
    "revision": "4e1321f308bf883c78af7557aa75dffb"
  },
  {
    "url": "images/mobile/Icon-83.5@2x.png",
    "revision": "9a4dfc2ace9372dd5d56ed60241f092f"
  },
  {
    "url": "images/mobile/Icon-Notification.png",
    "revision": "b6bafb951b5f2a0cd5cbd218c81c124b"
  },
  {
    "url": "images/mobile/Icon-Notification@3x.png",
    "revision": "fa8468a55aa89966c7f6b80fc9807733"
  },
  {
    "url": "images/mobile/Icon-Small-40.png",
    "revision": "99f32b4766ddae6a73a3eb47fd2c427c"
  },
  {
    "url": "images/mobile/Icon-Small-40@2x.png",
    "revision": "03589301a28896194902a4af96a0e036"
  },
  {
    "url": "images/mobile/Icon-Small-50.png",
    "revision": "6a4edf3dad92096614a45eb919b4fa28"
  },
  {
    "url": "images/mobile/Icon-Small-50@2x.png",
    "revision": "3f591b12444e66c99883264842a000a9"
  },
  {
    "url": "images/mobile/Icon-Small.png",
    "revision": "7a3d744374c977f80d1466850d4571d4"
  },
  {
    "url": "images/mobile/Icon-Small@2x.png",
    "revision": "b97c7cddbd7622c62c5cdfae475ef450"
  },
  {
    "url": "images/mobile/Icon-Small@3x.png",
    "revision": "0a2e63ec6bd18ea70324b6ede1115bd2"
  },
  {
    "url": "images/mobile/Icon.png",
    "revision": "a997631f4959ad741aaff766226b7979"
  },
  {
    "url": "images/mobile/Icon@2x.png",
    "revision": "4b3d5031edaf0bc4b40ed74a9dc11207"
  },
  {
    "url": "images/mobile/iTunesArtwork.png",
    "revision": "497afd210fd662d714df08b7211b4907"
  },
  {
    "url": "images/mobile/iTunesArtwork@2x.png",
    "revision": "8134e6d48672fb1a823cfc540fb19fc9"
  },
  {
    "url": "images/mobile/ldpi.png",
    "revision": "ab17abc3c5c7787035c4b9e2dfbaebda"
  },
  {
    "url": "images/mobile/mdpi.png",
    "revision": "095fc8b5cfc3d98044850726aa32fb5b"
  },
  {
    "url": "images/mobile/mobile512x512.png",
    "revision": "8f8c3b0ffd1e18256fbd875067ee8426"
  },
  {
    "url": "images/mobile/xhdpi.png",
    "revision": "7d8082da4b43eced6ca8bc6c9a3e2f91"
  },
  {
    "url": "images/mobile/xxhdpi.png",
    "revision": "80cd1e868e78f0cae2f06e5eea2f151d"
  },
  {
    "url": "images/mobile/xxxhdpi.png",
    "revision": "b62f796aad19abfb4438ffd54fd436d8"
  },
  {
    "url": "images/mobile512x512.png",
    "revision": "8f8c3b0ffd1e18256fbd875067ee8426"
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
    "revision": "4e0f2ae51b43b938b67ab855cf449a9d"
  },
  {
    "url": "js/app.js",
    "revision": "beeca5c15fa0618a92fe27aac0eb3d26"
  },
  {
    "url": "js/bootstrap/bootstrap.bundle.js",
    "revision": "50a98c751c19ae5ea4fc42b2ba2da89b"
  },
  {
    "url": "js/bootstrap/bootstrap.bundle.min.js",
    "revision": "ef58fee438cd2da2c3b33ff6f1cfeebf"
  },
  {
    "url": "js/bootstrap/bootstrap.js",
    "revision": "4bc939cd6b79a562e8d14bc7a4674520"
  },
  {
    "url": "js/bootstrap/bootstrap.min.js",
    "revision": "67176c242e1bdc20603c878dee836df3"
  },
  {
    "url": "js/hammer.min.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/main.js",
    "revision": "e3b4c5632fcb427025be244be6492973"
  },
  {
    "url": "payment.html",
    "revision": "b26751df051e90603a69e1bea42cf572"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
