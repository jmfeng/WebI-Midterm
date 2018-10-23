const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const arrowLeft = document.querySelector(".fa-arrow-left");
const arrowRight = document.querySelector(".fa-arrow-right");


//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
menuBtn.addEventListener("click", arrow);

function toggleMenu() {
  if (!showMenu) {
     menu.classList.add("show");
     menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }

}