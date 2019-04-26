//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

//Set initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu())

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('show');
        menu.classList.add('show');
        manuNav.classList.add('show');
        menuBranding.classList.add('show');
    }else{
        menuBtn.classList.add('close');
        menu.classList.add('close');
        manuNav.classList.add('close');
        menuBranding.classList.add('close');
    }
}