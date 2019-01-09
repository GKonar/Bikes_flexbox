const vintageBikeSection = document.querySelector('.vintageBike');
const footer = document.querySelector(".footer");

// Menu items 
const about = document.querySelector('.nav__items-link-about');
const work = document.querySelector('.nav__items-link-work');
const shop = document.querySelector('.nav__items-link-shop');
const contact = document.querySelector('.nav__items-link-contact');

// Mobile nav items
const hamburgerMenuToggleButton =  document.querySelector('.header__mobile-nav-toggle-button');
const hamburgerMenuHideButton =  document.querySelector('.header__mobile-nav-elements-toggle-button');
const mobileBackdrop = document.querySelector('.header__mobileBackdrop');  
const mobileNavElements = document.querySelector('.header__mobile-nav-elements');

// Toggle/Hide Nav Menu
hamburgerMenuToggleButton.addEventListener('click', () => { 
    mobileNavElements.style.display = 'flex';
    mobileBackdrop.style.display = 'flex';
});

hamburgerMenuHideButton.addEventListener('click', () => {
    mobileNavElements.style.display = 'none';
    mobileBackdrop.style.display = 'none';
})

mobileBackdrop.addEventListener('click', () => {
    mobileNavElements.style.display = 'none';
    mobileBackdrop.style.display = 'none';
})



 
// Tweeter Carousel solo JS

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("tweeterCarousel__slide");
    const dots = document.getElementsByClassName("tweeterCarousel__dots-dot");
  
        if (n > slides.length) {
            slideIndex = 1;
        } 
    
        if (n < 1) {   
            slideIndex = slides.length;
        }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
            console.log(slides[i]);
        }
    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            console.log(dots[i]);
        }

        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
}

// Smooth scroll JS solo JS

// function scrollTo(element, to, duration) {
//     if (duration < 0) return; // returns undefined
    
//     const difference = to - element.scrollTop;
//     // console.log(difference)
//     // console.log(to); // liczba pikseli o jaką się przesówa do podanego elementu 'to'
//     // console.log(element.scrollTop); // liczba pikseli o jaką się przesówa od góry
//     const perTick = difference / duration * 10;
//     // console.log(perTick);

//     setTimeout(function() {
//         element.scrollTop = element.scrollTop + perTick;
//         console.log(element.scrollTop);
//         if (element.scrollTop === to) return;
//         scrollTo(element, to, duration - 10);
//     }, 10);
// }


// about.addEventListener("click" ,function () {
//     scrollTo(document.documentElement, vintageBikeSection.offsetTop, 200);
// });
