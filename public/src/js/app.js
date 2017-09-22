/* global navigator*/

if('serviceWorker' in navigator){ //this checks the browser for a service worker
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service worker registered! Yay!!!');
        });
}
