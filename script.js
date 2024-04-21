// Toggle Icon Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let Homesection = document.querySelector('section');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');    
    navbar.classList.toggle('active'); 
    Homesection.classList.toggle('active');
}
