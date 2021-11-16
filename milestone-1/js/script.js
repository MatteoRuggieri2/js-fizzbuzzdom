// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

// Number - 1 to 100
for( let i = 1; i <= 100; i++ ) {

    let fizzBuzz;
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzBuzz = 'FizzBuzz'
        console.log(fizzBuzz);

    } else if( i % 3 === 0 ) {
        fizzBuzz = 'Fizz'
        console.log(fizzBuzz);

    } else if( i % 5 === 0 ) {
        fizzBuzz = 'Buzz'
        console.log(fizzBuzz);

    } else {
        console.log(i);
    }

}