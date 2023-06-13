gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1){

  ScrollSmoother.create({
    worpper: 'warpper',
    content: 'content',
    smooth: 1.5,
    effect: true 
})
gsap.fromTo('.bgBanner02',{ opacity: 1},{
 opacity: 0,
 scrollTrigger: {
    trigger: '.bgBanner02',
    start: 'center',
    end: '900',
    scrub: true
 }

})
}