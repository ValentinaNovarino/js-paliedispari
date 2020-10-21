// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

// creo una variabile e chiedo all'utente una parola
var userWord = prompt('Inserisci una parola. Ti dirò se è palindroma');

// creo una funzione per valutare se una parola è palindroma o no
var word;
function overturnTheWord (word){
    var reverseWord = [''];
    for (var i = word.length-1; i >= 0; i--) {
    reverseWord += word[i];
    }
    return reverseWord;
}

// creo una variabile per la parola rovesciata invocando la funzione
var isWordPalindrome = overturnTheWord(userWord);

// creo la condizione per vedere se la parola è o non è palindroma
if (isWordPalindrome == userWord){
    console.log('Palindroma');
}else{
    console.log('Non è palindroma');
}
