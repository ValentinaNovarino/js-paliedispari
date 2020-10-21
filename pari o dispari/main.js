// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

var min = 1;
var max = 5;

// chiedere all'utente un numero tra 1 e 5
var chosenNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(chosenNumber);
// verificare che il numero scelto sia compreso tra 1 e 5
if ((chosenNumber < min ) || (chosenNumber > max)) {
    alert('Numero non compreso');
    chosenNumber = prompt('Scegli un\'altro numero');
}

// chiedere all'utente se sceglie pari o dispari
var evenOdd = prompt('La somma del tuo numero e quello generato dal computer sarà pari o dispari?');
console.log(evenOdd);
// // verificare che la stringa inserita sia 'pari' o 'dispari'
// if ((evenOdd != 'pari') || (evenOdd != 'dispari')) {
//     alert('parola non ammessa');
//     evenOdd = prompt('digitare pari o dispari');
// }

// il computer genera un numero casuale tra 1 e 5
var computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber);

// creo la funzione che fa la somma fra due numeri
function addictionNumber(num1, num2) {
    var addiction = num1 + num2;
    return addiction;
}

// faccio la somma dei due numeri usando la funzione
var addiction = addictionNumber(chosenNumber, computerNumber);
console.log('la somma è = ' + addiction);

// creo la funzione che mi dice se la somma è pari o dispari
function evenOrOdd (addiction) {
    if (addiction % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// verifico se la somma è pari o dispari
addictionEvenOrOdd = evenOrOdd (addiction);
console.log('quindi la condizione della funzione è ' + addictionEvenOrOdd);

// verifica se l'utente ha vinto o perso 
if (evenOdd == 'pari' && addictionEvenOrOdd == true) {
    console.log('Hai vinto! La somma è ' + addiction);
} else if (evenOdd == 'pari' && addictionEvenOrOdd == false) {
    console.log('Hai perso! La somma è ' + addiction);
} else if (evenOdd == 'dispari' && addictionEvenOrOdd == true) {
    console.log('Hai perso! La somma è ' + addiction);
} else if (evenOdd == 'dispari' && addictionEvenOrOdd == false) {
    console.log('Hai vinto! La somma è ' + addiction);
}
