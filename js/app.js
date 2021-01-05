
// SIDE NAVIGATION BAR
const side_nav = document.querySelector(".side_nav");
const open_menu = document.querySelector(".open-menu");


open_menu.addEventListener("click", ()=>{

  side_nav.classList.toggle("reveal_nav")


})

// ANIMATION
// gsap.to(".logoBox",{duration:2, x:300})