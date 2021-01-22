

var filesToCache  = [
    
    'index.html',
    'css.css',
    'fontawesome.css',
    'js.js',
    'like.png',
    'robot.png',
    '9seconds.gif',
    'defaultuser.png',
    'chatbotfb.png',
    'sendmsg.png',
    'whatsapp.png',
    'whatsapp2.jpg',
    'gif1.gif',
    'gif2.gif',
    'gif3.gif',
    'gif4.gif',
    'gif5.gif',
    'best.jpg',
    'best2.jpg',
    'best3.jpg',
    'bg1.gif',
    'bg2.gif',
 
    'bg7.gif',
    'bg8.gif',
    'bg9.gif',
    'bg10.gif',
    'bg11.gif',
    'bg14.gif',
    'bgi6.jpg',
    'bgi7.jpg',
    'bgi8.jpg',
    'bgi9.jpg',
   
 
];

  
  
  var staticCacheName = 'pages-cache-v3';
  
  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });
  
  
  
  
  
  
  self.addEventListener('activate', function(event) {
    console.log('Activating new service worker...');
  
    var cacheWhitelist = [staticCacheName];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  
  
  
  
  self.addEventListener('fetch', function(event) {
    //console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
         // console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        //console.log('Network request for ', event.request.url);
        return fetch(event.request)
  
        // TODO 4 - Add fetched files to the cache
  
      }).catch(function(error) {
  
        // TODO 6 - Respond with custom offline page
  
      }).then(function(response) {
  
    // TODO 5 - Respond with custom 404 page
  
    return caches.open(staticCacheName).then(function(cache) {
      if (event.request.url.indexOf('test') < 0) {
       // cache.put(event.request.url, response.clone());
        //Not Supported in Chrome..!
      }
      return response;
    })
  })
      
    );
  });
  