// Initialize ScrollMagic
var controller = new ScrollMagic.Controller();

// Define animations
var fadeInDown = gsap.from('.fadeInDown', { opacity: 0, y: -50, duration: 1 });
var fadeInUp = gsap.from('.fadeInUp', { opacity: 0, y: 50, duration: 1 });
var fadeInLeft = gsap.from('.fadeInLeft', { opacity: 0, x: -50, duration: 1 });

// Create ScrollMagic scenes
var scene1 = new ScrollMagic.Scene({
    triggerElement: '#home',
    offset: 100,
    reverse: false
})
.setTween(fadeInDown)
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '#home',
    offset: 100,
    reverse: false
})
.setTween(fadeInUp)
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: '#about',
    offset: 100,
    reverse: false
})
.setTween(fadeInLeft)
.addTo(controller);
