// resoruces: https://felixgerschau.com/how-to-communicate-with-service-workers/

navigator
.serviceWorker
.register(
    // path to the service worker file
    './sw.js'
)
// the registration is async and it returns a promise
.then(function (reg) {
    // console.log(reg);
    console.log('Registration Successful');
});


navigator.serviceWorker.ready.then((registration) => {
    // At this point, a Service Worker is controlling the current page
    console.log("registration");
    console.log(registration);
  });

  function sendEvent() {
      navigator.serviceWorker.controller.postMessage({
          type: 'version',
        });
  }


  function updateEvent() {
    navigator.serviceWorker.controller.postMessage({
        type: 'update',
      });
}
  
navigator.serviceWorker.onmessage = (event) => {
    console.log("reply from service");
    console.log(event.data.msg);
  };