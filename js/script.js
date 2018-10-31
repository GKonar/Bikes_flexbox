var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("tweeter-carousel__slide");
    var dots = document.getElementsByClassName("tweeter-carousel__dot");
  
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
        // console.log(slides);
        // console.log(slideIndex);
        // console.log(slideIndex);
}