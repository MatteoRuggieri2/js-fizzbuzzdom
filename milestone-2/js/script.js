// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// Number - 1 to 100
for( let i = 1; i <= 100; i++ ) {

    let fizzBuzz;
    let squareContainer = document.getElementById("square-container");
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzBuzz = 'FizzBuzz';

    } else if( i % 3 === 0 ) {
        fizzBuzz = 'Fizz';

    } else if( i % 5 === 0 ) {
        fizzBuzz = 'Buzz';

    } else {
        fizzBuzz = i;
    }

    // OUTPUT
    squareContainer.innerHTML += `<div class="box">${fizzBuzz}</div>`

}