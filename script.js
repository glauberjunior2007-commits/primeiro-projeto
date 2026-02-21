gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
    smooth: 1,
    effects: true,
})

function animacaoPagina() {
    //ANIMAÇÃO HERO
    gsap.from("picture:nth-child(2)", {
        y: 70,
        duration: 1,
        opacity: 0,
    })

    gsap.from("picture:nth-child(1)", {
        y: -70,
        duration: 1.5,
        opacity: 0,
    })

    const grupounicosplit = document.querySelectorAll(".textosplit")

grupounicosplit.forEach((textounicosplit) => {
    const split = SplitText.create(textounicosplit, {
        type: "lines, words, chars",
        mask: "lines",
    })

    gsap.from(split.chars, {
        y: 40,
        stagger: .03,
        duration: .5,
        opacity: 0,
        filter: "blur(5px)",
        scrollTrigger: {
            trigger: textounicosplit,
            start: "0% 80%",
        }
    })
})

    //ANIMAÇÃO CARDS
    gsap.from(".cards", {
        x: -100,
        duration: 1,
        opacity: 0,
        filter: "blur(10px)",
        scrollTrigger: {
            trigger: ".cards",
            start: ("0% 70%"),
            end: ("100% 50%"),
            scrub: true,
        }
    })

    //ANIMAÇÃO CIDADES
    gsap.from(".secaoobrigado ul li", {
        x: -50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".secaoobrigado",
            start: "30% 70%",
            end: ("100% 60%"),
            scrub: true,
        }
    })

    //ANIMAÇÕES FOOTER

    gsap.from("footer", {
        y: -200,
        duration: 2.5,
        scrollTrigger: {
            trigger: "footer",
            start: "20% 80%",
            end: "70% 80%",
            scrub: true,
        }
    })

}
//ANIMAÇÃO DE SPLIT TEXT




const tl = gsap.timeline({
    onComplete() {
        gsap.to("#preloader", {
            opacity: 0,
            onComplete() {
                animacaoPagina()
                gsap.to("#preloader", {
                    display: "none",
                })

            }
        })
    }

})

tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0,
})
tl.to("#preloader path", {
    duration: 1,
    opacity:0,
    fill: "rgb(255, 0, 0)",
    strokeDashoffset: 900,
})

