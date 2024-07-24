gsap.from("#page3 h1", {
    opacity:0,
    duration: 2,
    x:300,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})


gsap.from("#page3 h2", {
    opacity:0,
    duration: 2,
    x:-300,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})


