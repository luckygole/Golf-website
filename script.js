var cur = document.querySelector(".cursor")
var bigcur = document.querySelector(".big-cursor")
var h4all = document.querySelectorAll("nav h4")
var page3p = document.querySelector(".page3 p")

document.addEventListener("mousemove", function(dets){
    cur.style.left=dets.x+"px"
    cur.style.top = dets.y+"px"
    bigcur.style.left=dets.x - 100 +"px"
    bigcur.style.top = dets.y - 100 +"px"
})
gsap.to("nav" , {
    backgroundColor:"black",
    duration:0.9,
    height: 95,
    scrollTrigger:{
        // markers:true,
        start:"top -10%",
        end:"top -11px",
        trigger:"nav",
        scroller:"body",
        scrub:1
    }
});
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        markers:true,
        scroller:"body",
        start:"top -20%",
        end:"top -80%",
        scrub:2
    }
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale = 3;
        cur.style.border = "1px solid white";
        cur.style.backgroundColor = "transparent";
        cur.style.transition = 0.5
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1;
        cur.style.border = "none";
        cur.style.backgroundColor = "#95C11E";
    })
});

page3p.addEventListener("mouseenter",function(){
    cur.style.scale = 3;
    cur.style.border = "1px solid white";
    cur.style.backgroundColor = "transparent";
    cur.style.transition = 0.5
})
page3p.addEventListener("mouseleave",function(){
    cur.style.scale = 1;
    cur.style.border = "none";
    cur.style.backgroundColor = "#95C11E";
})

gsap.from(".about-us img, .about-us-in" ,{
    y:90,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        top:"top 60%",
        end:"top 50%",
        scrub:1,
    }
})

gsap.from(".cards" ,{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        top:"top 70%",
        end:"top 60%",
        scrub:2,
    }
})

gsap.from("#colon1" ,{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        top:"top 50%",
        end:"top 45%",
        scrub:2,
    }
})

gsap.from("#colon2" ,{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        top:"top 80%",
        end:"top 77%",
        scrub:2,
    }
})

gsap.from(".page4 h1",{
    y:80,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 85%",
        scrub:2
    }
})