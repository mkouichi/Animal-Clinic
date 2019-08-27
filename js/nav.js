// Nav Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle("show");
    menu.classList.toggle("show");
    navbar.classList.toggle("show");
    navItems.forEach(item => item.classList.toggle("show"));
}
