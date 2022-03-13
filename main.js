let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal ({
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: false,
    origin: 'left'
})
sr.reveal('.home',{delay:100})
sr.reveal('.istoriq',{delay:400})
sr.reveal('.dpvek',{delay:300})
sr.reveal('.budeshte',{delay:200})
sr.reveal('.contacts',{delay:100})