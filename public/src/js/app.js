/* global navigator*/

if('serviceWorker' in navigator){ //this checks the browser for a service worker
    navigator.serviceWorker
        .register('/sw.js') //you can add an additional object as a second argument to restrict the scope of the service worker
        .then(() => {
            console.log('Service worker registered! Yay!!!');
        });
}
