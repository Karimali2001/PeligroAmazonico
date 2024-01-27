var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/assets/game-imgs/arania.svg',
    "/assets/game-imgs/escorpion.svg",
    "/assets/game-imgs/anaconda.svg",
    "/assets/game-imgs/caiman.svg",
    "/assets/game-imgs/anguila.svg",
    "/assets/game-imgs/serpiente.svg",
    "/assets/game-imgs/pirania.svg",
    "/assets/game-imgs/rana.svg",
    "/assets/game-imgs/chucho.svg",
    "/assets/game-imgs/jaguar.svg",
    "/assets/game-imgs/ciempies.svg",
    "/assets/game-imgs/mosquito.svg",
    "/assets/game-imgs/candiru.svg",
    "/assets/game-imgs/tarantula.svg",
    "/assets/game-imgs/trompeta.svg",
    "/assets/game-imgs/strychnos.svg",
    "/assets/game-imgs/curare.svg",
    "/assets/game-imgs/shuar.svg"
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});