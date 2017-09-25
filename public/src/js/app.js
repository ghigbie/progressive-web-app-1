/* global navigator*/
var deferredPrompt;


if('serviceWorker' in navigator){ //this checks the browser for a service worker
    navigator.serviceWorker
        .register('/sw.js') //you can add an additional object as a second argument to restrict the scope of the service worker
        .then(() => {
            console.log('Service worker registered! Yay!!!');
        });
}


window.addEventListener('beforeinstallprompt', function(event){
   console.log('beforeinstallprompt fired');
   event.preventDefault();
   deferredPrompt = event;
   return false;
});