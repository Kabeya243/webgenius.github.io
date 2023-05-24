AOS.init();
let closeBtn = document.querySelector('.close-btn');
let openBtn = document.querySelector('.open-btn');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('.l');
let body = document.body;
let themeBtn = document.querySelector(".bxs-moon");

// open and close menu script 
openBtn.addEventListener('click',()=>{
    menu.style.marginRight = '0px';
    menu.style.transition = '.3s';
    body.style.overflow = "hidden"
    menu.style.display = "flex"
})
closeBtn.addEventListener('click',()=>{
    menu.style.marginRight = '-400px';
    menu.style.transition = '.3s';
    body.style.overflowY = ""
    menu.style.display = "none"
})
links.forEach((link)=>{
    link.addEventListener('click',()=>{
        menu.style.transition = '.3s';
        menu.style.overflowY = ""
    })}
)
// open and close menu script
// changing theme script 
themeBtn.addEventListener('click',()=>{
    body.classList.toggle('dark');
    themeBtn.classList.toggle("bxs-sun");
    closeBtn.style.color = "#f1f1f1"
})
// changing theme script 

