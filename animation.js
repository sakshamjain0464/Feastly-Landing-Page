// Navbar
gsap.from('nav', {
    top: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 5,
    ease: 'power1.in'
});

// hero section
let mainTl = gsap.timeline();

mainTl.from(".leftHero-content>h1", {
    left: -70,
    opacity: 0,
    duration: 0.5
});

mainTl.from(".leftHero-content>p", {
    left: -70,
    opacity: 0,
    duration: 0.5
});

mainTl.from(".leftHero-content>.search", {
    left: -70,
    opacity: 0,
    duration: 0.5
});

gsap.to(".burger", {
    opacity: 1,
    left: 50,
    ease: "power1.out",
    duration: 1
});

mainTl.to("#tomato1", {
    top: 19,
    left: -100,
    opacity: 1,
    rotate: 75,
    ease: "power1.out",
    duration: 0.02
});

mainTl.to("#tomato2", {
    left: -70,
    opacity: 1,
    rotate: 60,
    ease: "power1.out",
    duration: 0.02
});

mainTl.to("#tomato3", {
    top: 381,
    left: -92,
    opacity: 1,
    rotate: 50,
    ease: "power1.out",
    duration: 0.02
});

mainTl.to(".location", {
    left: 0,
    duration: 0.5
});

mainTl.to(".rightLeftIcons", {
    opacity: 1,
    duration: 0.5,
});

mainTl.from(".scroll>i, .scroll>p", {
    top: -10,
    opacity: 0,
    repeat: -1,
    stagger: 0.9,
    delay: 0.2
})
// Tomatos Hover effect
let tomato = document.querySelectorAll(".tomato");
tomato = Array.from(tomato);
tomato.forEach((tomato) => {
    tomato.addEventListener('mouseenter', () => {
        tomato.style.transform = 'scale(1.2)';
    });
    tomato.addEventListener('mouseleave', () => {
        tomato.style.transform = 'scale(1)';
    });
});

// Second section animation
let secondTl_Content = gsap.timeline({
    scrollTrigger: {
        trigger: ".second",
        start: "top 90%",
        end: "top 10%",
        // markers : true,
        scrub: 1
    }
});

let secondTl_BG = gsap.timeline({
    scrollTrigger: {
        trigger: ".second",
        start: "top bottom",
        end: "top top",
        // markers : true,
        scrub: 2
    }
});

secondTl_BG.from(".bgSecond-IMG-1", {
    rotate: 0,
});
secondTl_BG.from(".bgSecond-IMG-2", {
    rotate: -180,
});
secondTl_Content.from(".secondHead", {
    left: -50,
    opacity: 0,
    ease: "power1.in",
});
secondTl_Content.from(".secondText", {
    right: -70,
    opacity: 0,
    ease: "power1.in",
})
secondTl_Content.from(".bgSecond > div", {
    left: -70,
    opacity: 0,
    ease: "power1.in",
})
secondTl_Content.from(".card1", {
    scale: 0,
    ease: "power1.in",
})
secondTl_Content.from(".card2", {
    scale: 0,
    ease: "power1.in",
});
secondTl_Content.from(".toCard", {
    opacity: 0,
    scale: 0,
    ease: "power1.in",
});

// Third Section
let thirdTl_BG = gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        start: "top 70%",
        end: "top 60%",
        // markers : true,
        scrub: 2
    }
})

let thirdTl_Content = gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        start: "top 60%",
        end: "top 40%",
        // markers : true,
        scrub: 2
    }
})

thirdTl_Content.from(".glass-img-1", {
    rotate: 0,
    opacity: 0
})
thirdTl_Content.from(".lemon-img-2", {
    rotate: 30,
    leftt: -20,
    opacity: 0
})
thirdTl_Content.from(".lemon-img-1", {
    rotate: 180,
    right: 20,
    opacity: 0

})
thirdTl_Content.from(".leaf-img-1", {
    scale: 0,
    opacity: 0
})
thirdTl_BG.from("svg", {
    scale: 0,
    opacity: 0
})

// Foutrh Section Animation
let fourthTl_BG = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth",
        start: "top 95%",
        end: "top 40%",
        // markers : true,
        scrub: 2
    }
})

let fourthTl_Content = gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth",
        start: "top 90%",
        end: "top top",
        // markers : true,
        scrub: 2
    }
})

fourthTl_Content.from(".fourthHead > h1", {
    opacity: 0
})

fourthTl_Content.from(".fourthHead > p", {
    opacity: 0
})

fourthTl_Content.from(".fourthCard", {
    scale: 0,
    stagger: 0.1,
    ease: "power1.inOut"
})

fourthTl_BG.from(".fourthBG-Img-1", {
    rotate: 0
})
fourthTl_BG.from(".fourthBG-Img-2", {
    rotate: -200
})

// Lasr tection Animation
let lastTl_BG = gsap.timeline({
    scrollTrigger: {
        trigger: ".last",
        start: "top 70%",
        end: "top 40%",
        // markers : true,
        scrub: 2
    }
})

if (window.innerWidth <= 700) {
    var lastTl_Content = gsap.timeline({
        scrollTrigger: {
            trigger: ".last",
            start: "top 950%",
            end: "top 90%",
            markers: true,
            scrub: 2
        }
    })
} else {
    var lastTl_Content = gsap.timeline({
        scrollTrigger: {
            trigger: ".last",
            start: "top 80%",
            end: "top 20%",
            // markers : true,
            scrub: 2
        }
    })
}


lastTl_Content.from(".lastContent-left > img", {
    opacity: 0,
    left: -50
})
lastTl_Content.from(".lastContent-right > img", {
    opacity: 0,
    left: 500,
    rotate: 60
})
lastTl_Content.from(".lastContent-mid", {
    opacity: 0,
    top: -40
})

lastTl_BG.from(".last-bgElem", {
    opacity: 0
})

// Mouse Follower
let cursor = document.querySelector(".mouseFollower");
document.addEventListener('mousemove', (e) => {
    gsap.to('.mouseFollower', {
        opacity: 1,
        duration: 1.2
    })
    if (e.target.className == 'mouseFollower') {
        gsap.to('.mouseFollower', {
            top: e.clientY,
            left: e.clientX
        });
    }
    else if (e.target.className == 'mainContent') {
        gsap.to('.mouseFollower', {
            scale: 1,
            top: e.clientY,
            left: e.clientX
        });
    }
    else if (e.target.tagName == 'H1') {
        gsap.to('.mouseFollower', {
            scale: 3,
            top: e.clientY,
            left: e.clientX
        });
    }
    else if (e.target.tagName == 'INPUT' || e.target.tagName == 'BUTTON') {
        gsap.to('.mouseFollower', {
            scale: 0,
            top: e.clientY,
            left: e.clientX
        });
    }
    else if (e.target.tagName == 'IMG') {
        gsap.to('.mouseFollower', {
            scale: 3,
            top: e.clientY,
            left: e.clientX
        });
    }
    else if (e.target.classList.contains('card') || e.target.className == 'fourt') {
        cursor.style.mixBlendMode = 'initial';
        cursor.innerHTML = `<img src="./tenor.gif" alt="">`;
        gsap.to('.mouseFollower', {
            scale: 3,
            top: e.clientY,
            left: e.clientX
        });
    }
    else {
        cursor.style.mixBlendMode = 'difference';
        cursor.innerHTML = "";
        gsap.to('.mouseFollower', {
            scale: 1,
            top: e.clientY,
            left: e.clientX
        });
    }
})

// Expanding Navbar

function expandNav(){
    let nav = document.querySelector(".navLinks");
    if(nav.classList.contains('expand')){
        gsap.to(".fa-location-arrow",{
            top: 0,
            left:0,
            duration: 0.5,
            ease:"powerIn.inOut"
        });
        gsap.to(".navLinks",{
            left:-500,
            duration: 1,
            ease:"powerIn.in"
        });
        nav.classList.remove("expand");
    }
    else{
        gsap.to(".fa-location-arrow",{
            top: -500,
            left:500,
            duration: 1.5,
            ease:"powerIn.inOut"
        });
        gsap.to(".navLinks",{
            left:0,
            duration: 1,
            ease:"powerIn.in"
        });
        nav.classList.add('expand');
    }
}

function expandSection(){
    let section = document.querySelector(".fourthCards");
    if(section.classList.contains('expand')){
        gsap.to(".fourthCards",{
            height: 0,
            duration: 0.5,
            ease:"powerIn.inOut"
        });
        gsap.to(".fourthCard",{
            height: 0
        });
        gsap.to(".fourthContent>i",{
            rotate: 0,
            ease:"powerIn.in"
        });
        section.classList.remove("expand");
    }
    else{
        gsap.to(".fourthCards",{
            height: "fit-content",
            duration: 0.5,
            ease:"powerIn.inOut"
        });
        gsap.to(".fourthCard",{
            height: "100%",
            duration:0
        });
        gsap.to(".fourthContent>i",{
            rotate: 180,
            ease:"powerIn.in"
        });
        section.classList.add("expand");
    }
}