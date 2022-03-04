// #1- SHOW MENU
const navbar = document.querySelector('.navbar');
const toggleBtn = document.getElementById('navToggle');
const popUp = document.querySelector('.popup');

toggleBtn.onclick = () =>{
    toggleBtn.classList.toggle('fa-times');
    navbar.classList.toggle('show-menu');
    popUp.classList.toggle('show-popup');
}

// #2- Link Remove Navbar

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(link =>{
    link.onclick = () =>{
        toggleBtn.classList.remove('fa-times');
        navbar.classList.remove('show-menu');
        popUp.classList.remove('show-popup');
    }
});

// #3- Scroll Remove Navbar

window.onscroll = () =>{
    if(this.scrollY > 80){
        toggleBtn.classList.remove('fa-times');
        navbar.classList.remove('show-menu');
        popUp.classList.remove('show-popup');
    }
}


// #4- Change Background Header
function changeBgHeader(){
    const header = document.querySelector('.header');

    if(this.scrollY >= 80){
        header.classList.add('addBgHeader');
    }else{
        header.classList.remove('addBgHeader');
    }
}
window.addEventListener('scroll', changeBgHeader);


// #5- Popup Video
const btnVideo = document.getElementById('about-video');
const popupVideo = document.querySelector('.popup-video');
const video = document.querySelector('.popup-video .video');

btnVideo.onclick = () =>{
    popupVideo.style.display = "block";
    video.src = video.getAttribute('src');
}
document.querySelector('.close').onclick = () =>{
    popupVideo.style.display = "none";
}

// #6- Testimonials Slides
var swiper = new Swiper(".testi-slide", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    breakpoints:{
        450: {
            slidesPerView: 2,
            
        },
        640: {
            slidesPerView: 2,
            
        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView: 3,
            
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// #7- Scroll Up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);