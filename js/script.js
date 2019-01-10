// Nav items 
const nav = document.querySelector('.nav');
const scrollTopButton = document.querySelector('.header__scrollTopButton')
const navItemsLinks = document.getElementsByClassName('nav__items-link');
const about = document.querySelector('.nav__items-link-about');
const work = document.querySelector('.nav__items-link-work');
const shop = document.querySelector('.nav__items-link-shop');
const contact = document.querySelector('.nav__items-link-contact');
// Mobile nav elements
const hamburgerMenuToggleButton =  document.querySelector('.header__mobile-nav-toggle-button');
const hamburgerMenuHideButton =  document.querySelector('.header__mobile-nav-elements-toggle-button');
const mobileBackdrop = document.querySelector('.header__mobileBackdrop');  
const mobileNavElements = document.querySelector('.header__mobile-nav-elements');
// Sections
const vintageBikeSection = document.querySelector('.vintageBike'); 
const vintageOlivaSection = document.querySelector('.vintageOliva'); 
const bikesImagesSection = document.querySelector('.bikesImages'); 
const subscriptionSection = document.querySelector('.subscription'); 

// Toggle/Hide Nav Menu
hamburgerMenuToggleButton.addEventListener('click', () => { 
    mobileNavElements.classList.remove('header__mobile-nav-animate-back');
    mobileNavElements.classList.add('header__mobile-nav-animate');
    mobileBackdrop.style.display = 'flex';
});

hamburgerMenuHideButton.addEventListener('click', () => {
    mobileNavElements.classList.remove('header__mobile-nav-animate');
    mobileNavElements.classList.add('header__mobile-nav-animate-back');
    mobileBackdrop.style.display = 'none';
});

mobileBackdrop.addEventListener('click', () => {
    mobileBackdrop.style.display = 'none';
    mobileNavElements.classList.add('header__mobile-nav-animate-back');
});

window.addEventListener('scroll', () => {
    mobileBackdrop.style.display = 'none';
    mobileNavElements.classList.add('header__mobile-nav-animate-back');
});



// FIXED MENU 
const changeColor = () => {
    let i;
    for (i = 0 ; i < navItemsLinks.length ; i++) {
        navItemsLinks[i].style.color = 'white';
    }
};

const changeColorBack = () => {
    let i;
    for (i = 0 ; i < navItemsLinks.length ; i++) {
        navItemsLinks[i].style.color = '#4d4959';
    }
};

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        nav.classList.add('nav__fixed-menu');
        nav.style.color = 'white';
        scrollTopButton.classList.add('header__scrollTopButton-showUp')
        changeColor();
    } else {
        nav.classList.remove('nav__fixed-menu');
        nav.style.color = '#4d4959';
        scrollTopButton.classList.remove('header__scrollTopButton-showUp')
        changeColorBack();
    }
});


// Tweeter Carousel
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


// Smooth scrollTo
const scrollTo = (element, to, duration) => {
    if (duration < 0) return; // undefined
    
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return; // undefined
        scrollTo(element, to, duration - 10);
    }, 10); // co 10 ms wykonuje te funkcje
}

// Smooth scroll to elments
about.addEventListener("click" , () => {
    scrollTo(document.documentElement, vintageBikeSection.offsetTop , 200);
});

work.addEventListener("click" , () => {
    scrollTo(document.documentElement, vintageOlivaSection.offsetTop - 114, 300);
});

shop.addEventListener('click', () => {
    scrollTo(document.documentElement, bikesImagesSection.offsetTop - 114, 400);
});

contact.addEventListener('click', () => {
    scrollTo(document.documentElement, subscriptionSection.offsetTop - 115, 500);
});

scrollTopButton.addEventListener('click', () => {
    scrollTo(document.documentElement, nav.offsetTop , 300);
})