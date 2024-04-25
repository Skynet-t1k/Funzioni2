// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'


function verFizzBuzz(numero){
    for(i=1; i<=numero; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('fizzBuzz');
        }
        else if(i % 5 == 0){
            console.log('Buzz');
        }
        else if(i % 3 == 0){
            console.log('Fizz');
        }
        else{
            console.log(i);
        }
    }
}

verFizzBuzz(100);
