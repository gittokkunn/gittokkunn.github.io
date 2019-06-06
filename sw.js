importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/202590c5d6e8dae46685.js",
    "revision": "03ffcb73b9c0cfb2511844f0ceca5c5a"
  },
  {
    "url": "/_nuxt/2b11700f37ceb0d2fc9a.js",
    "revision": "0f55a003c201f5a7dd3c71884593e399"
  },
  {
    "url": "/_nuxt/4128611c72dc3b9ccae7.js",
    "revision": "05e96f033b67373de6b8157c692e54f4"
  },
  {
    "url": "/_nuxt/474b6ddf3a82d897813f.js",
    "revision": "85fc1db1074e139cfef91fb05aef250a"
  },
  {
    "url": "/_nuxt/f9d96b2c1be50b1fe3ad.js",
    "revision": "4d895e67f41750e26773f333222eef01"
  }
], {
  "cacheId": "gittokkunn.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
