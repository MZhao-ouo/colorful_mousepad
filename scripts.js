window.addEventListener("scroll", (e)=>{
    let noStickyOffset = document.body.clientHeight*4; 
    let scrolled = document.body.scrollTop / noStickyOffset;
    console.log(scrolled);

    let $pink = document.querySelector(".pink");
    let $purple = document.querySelector(".purple");
    let $orange = document.querySelector(".orange");
    let $blue = document.querySelector(".blue");

    $pink.style.clipPath = `inset(${((0.25-scrolled)/0.25)*100}% 0px 0px 0px)`;
    $purple.style.clipPath = `inset(${((0.5-scrolled)/0.25)*100}% 0px 0px 0px)`;
    $orange.style.clipPath = `inset(${((0.75-scrolled)/0.25)*100}% 0px 0px 0px)`;
    $blue.style.clipPath = `inset(${((1-scrolled)/0.25)*100}% 0px 0px 0px)`;

    if(scrolled>=1) {
        document.querySelector(".sticky-container").classList.add("no-sticky");
    } else {
        document.querySelector(".sticky-container").classList.remove("no-sticky");
    }
})
