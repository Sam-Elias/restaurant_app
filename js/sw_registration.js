/* Service Worker Registration*/
if ('serviceWorker' in navigator) {

navigator.serviceWorker
        .register('js/sw.js')
        .then(function(reg) {
            console.log('SW Registered: ' + reg.scope);
        })
        .catch(function(err) {
            console.log('SW Registration failed: ' + err);
        });
} 