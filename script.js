var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 125 + "px"
    blur.style.top = dets.y - 125 + "px"
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2.5
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
});


gsap.to("#nav", {
    height: "110px",
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    },
});

gsap.from("#aboutus img,#aboutus-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 50%",
        scrub: 3
    },
});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 1
    },
});


gsap.from("#cql", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#cql",
        scroller: "body",
        // markers :true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },

});

gsap.from("#cqr", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#cqr",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        scrub: 4,

    },
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: 3
    },
});