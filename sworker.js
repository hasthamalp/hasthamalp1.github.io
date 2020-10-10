self.addEventListener("install",e=>{

// console.log("service worked change")
// console.log("service worked updation")
e.waitUntil(
    caches.open("static").then(cache=>{
        return cache.addAll(["./","demo-one-page/agency/images/logo641.png","demo-one-page/agency/images/logo64.png"]);
    })
)
})
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )

})