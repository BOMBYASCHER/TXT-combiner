gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1){

  ScrollSmoother.create({
    worpper: 'warpper',
    content: 'content',
    smooth: 1.5,
    effect: true 
})
gsap.fromTo('.hero-section',{ opacity: 1},{
 opacity: 0,
 scrollTrigger: {
    trigger: '.hero-section',
    start: 'bgBanner02',
    end: 'bottom',
    scrub: true
 }

})
}