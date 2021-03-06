// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// Number - 1 to 100
for( let i = 1; i <= 100; i++ ) {

    let fizzBuzz;
    let squareContainer = document.getElementById("square-container");
    let squareColor;
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzBuzz = 'FizzBuzz';
        squareColor = 'fizz-buzz';

    } else if( i % 3 === 0 ) {
        fizzBuzz = 'Fizz';
        squareColor = 'fizz';


    } else if( i % 5 === 0 ) {
        fizzBuzz = 'Buzz';
        squareColor = 'buzz';


    } else {
        fizzBuzz = i;

    }

    // OUTPUT
    squareContainer.innerHTML += `<div class="box ${squareColor}">${fizzBuzz}</div>`

}