let tl=gsap.timeline()

tl.from("#nav img,#nav h3, #nav h4,#nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("h1",{
    y:100,
    opacity:0,
    stagger:0.2,
})

tl.from("#left-img",{
    y:-100,
    opacity:0
})
tl.from("#right-img",{
    y:100,
    opacity:0
})

tl.from("h5",{
    y:-100,
    opacity:0,
    duration:1.5,
    repeat:-1,
    yoyo:true
})
