import gsap from "gsap";

export function heroEntrance() {

    gsap.set([
        ".navbar",
        ".hero-tag",
        ".hero-left h1",
        ".hero-description",
        ".search-wrapper",
        ".trending",
        ".hero-right-wrapper"
    ], {
        clearProps: "all"
    });

    const tl = gsap.timeline();

    tl.from(".navbar", {
        y: -80,
        opacity: 0,
        duration: 1,
    })

    .from(".hero-tag", {
        y: 40,
        opacity: 0,
        duration: 0.6,
    })

    .from(".hero-left h1", {
        y: 40,
        opacity: 0,
        duration: 0.8,
    })

    .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.6,
    })

    .from(".search-wrapper", {
        y: 30,
        opacity: 0,
        duration: 0.6,
    })

    .from(".trending", {
        y: 20,
        opacity: 0,
        duration: 0.5,
    });

}