// Select DOM Items - Document Object Model
const menuBtn = document.querySelector(".menu-btn"); //div
const menu = document.querySelector(".menu"); //div

// the ul
const menuNav = document.querySelector(".menu-nav"); // ul

// the profile pic div
const menuBranding = document.querySelector(".menu-branding"); //div

// using querySelectorAll take all elements and put them in a node-list (similar to an array)
const navItems = document.querySelectorAll(".nav-item"); // li

// === Set Initial State Of Menu ===
let showMenu = false;

// clicking the menu button run function
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    // loop through all the items and then add the class show to each one
    // forEach = high order array method, pass in a var to represent each item 'item' in our case
    navItems.forEach(item => item.classList.add("show"));

    // and Set Menu State
    showMenu = true;
    console.log("clicked menu, show menu =>", showMenu);
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    // and Set Menu State
    showMenu = false;
    console.log("clicked menu, show menu =>", showMenu);
  }
}
