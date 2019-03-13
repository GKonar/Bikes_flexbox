// Smooth scrollTo ????
const scrollTo = (element, to, duration) => {
    if (duration <= 0) return; // jeśli warunek jest spełniony to zwracamy undefined
    const difference = to - element.scrollTop; //sprawdza ile się przeskrolowało w pierwszym wywołaniu funkcji
    const perTick = difference / duration * 10; // liczba pikseli jaka ma byc dodawana do element.scrollTop podczas jednego wywołania funkcji , czyli ilość pikseli na czas jaki minął razy 10(zamiana jednostek) === przesunięcie o tyle pikseli za jednym wykonaniem
    // console.log(`${to} - ${element.scrollTop} = ${difference}`)
    // console.log(difference)
    // console.log(duration)
    // console.log(perTick)
    setTimeout(function() { //ten setTimeout wykonuje te funkcje powtarzalnie do momentu az jest ukonczona
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return; // jeślie element.scrollTop dojdzie do warości podanej w to to kończymy te funkcje 
        scrollTo(element, to, duration -10); //wywołanie funkcji od samego początku i odejmujemy od czasu trwania 10 milisekund
    }, 10); 
};
//settimeout calls it until it is done in a recursive manner. 

// scrollTop property
// window.addEventListener('scroll', () =>{
//     const pixelsScrolled = document.documentElement.scrollTop 
//      console.log(document)
//     console.log(pixelsScrolled)
// })