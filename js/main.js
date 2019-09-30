//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLine = document.querySelectorAll('.menu-line');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuBranding.classList.add('show');
        menuLine.forEach(item => item.classList.add("show"));
        navItems.forEach(item => item.classList.add('show'));
        menuNav.classList.add('show');
        menu.classList.add('show');
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuBranding.classList.remove('show');
        menuLine.forEach(item => item.classList.remove("show"));
        navItems.forEach(item => item.classList.remove('show'));
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        showMenu = false;
    }
}