let count = 0;

self.addEventListener('fetch', function (event) {
    // do nothing here, just log all the network requests
    console.log(clients);
    console.log("register network request");
    console.log(event.request.url);
  });

self.addEventListener('message', (event) => {
    console.log("received event");
    console.log(event);
    if (event.data.type == "version") {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => client.postMessage({msg: count}));
        });    
    } else if (event.data.type == "update") {
        count++;
    }
});

self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});