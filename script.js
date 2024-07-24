// gsap.from("#page3 h1", {
//     opacity:0,
//     duration: 2,
//     x:300,
//     scrollTrigger: {
//         trigger: "#page3 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
// })


// gsap.from("#page3 h2", {
//     opacity:0,
//     duration: 2,
//     x:-300,
//     scrollTrigger: {
//         trigger: "#page3 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
// })

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    rotate: 720,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
    }
})
