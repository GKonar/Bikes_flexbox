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