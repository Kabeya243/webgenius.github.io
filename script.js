// script du menu hamburger 
let burgerButton = document.querySelector('.fa-hamburger');
let menu = document.querySelector('#menu-list');
burgerButton.addEventListener('click', menuShow);
function menuShow(){
    menu.classList.toggle('active');
}
// script du menu hamburger 

// script du dark-mode 
let darkBtn = document.querySelector('#dark-mode');
let body = document.body;
let nav = document.querySelector('nav');
let miniNav = document.querySelector('.mini-nav');
darkBtn.addEventListener('click', darkMode);
function darkMode(){
    body.classList.toggle('active');
    nav.classList.toggle('active')
    miniNav.classList.toggle('active')
}
// script du dark-mode

// boite d'inscription 
let signBtn = document.querySelector('#joinUs');
let closeBtn = document.querySelector('#close');
let formDiv = document.querySelector('#formDiv');
let formbck = document.querySelector('.formbck');
signBtn.addEventListener('click',() =>{
    formDiv.style.display = 'flex';
})
closeBtn.addEventListener('click', () =>{
    formDiv.style.display = 'none';
})
formbck.addEventListener('click', () =>{
    formDiv.style.display = 'none';
})

// boite d'inscription  
