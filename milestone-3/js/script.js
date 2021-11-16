// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// Number - 1 to 100
for( let i = 1; i <= 100; i++ ) {

    let fizzBuzz;
    let squareContainer = document.getElementById("square-container");
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzBuzz = 'FizzBuzz'
        squareContainer.innerHTML += `<div class="box">${fizzBuzz}</div>`

    } else if( i % 3 === 0 ) {
        fizzBuzz = 'Fizz'
        squareContainer.innerHTML += `<div class="box">${fizzBuzz}</div>`

    } else if( i % 5 === 0 ) {
        fizzBuzz = 'Buzz'
        squareContainer.innerHTML += `<div class="box">${fizzBuzz}</div>`

    } else {
        squareContainer.innerHTML += `<div class="box">${i}</div>`
    }

}