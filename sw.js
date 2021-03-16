let cacheData = "ReactPWA";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js.map',
                '/static/js/vendors~main.chunk.js',
                '/static/css/main.chunk.css',
                '/bootstrap.min.css',
                '/static/js/main.chunk.js.map',
                '/index.html',
                '/public/manifest.json',
                '/manifest.json',
                '/',
                '/favicon.ico',
                '/logo192.png',
                '/users',
                '/about',
                '/static/media/cat2.e0eb7c25.jpg',
                '/static/media/cat.209457df.jpg'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {


    console.warn("url",event.request.url)


    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
    if (navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Pet Park", {
                    body: "welcome to Petpark",
                })
            )
        }
       
    }
}) 