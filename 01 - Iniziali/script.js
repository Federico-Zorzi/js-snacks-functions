/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const firstLetter = [];

// ! PRIMA SOLUZIONE
// Dichiara la funzione qui.
names.forEach((currentValue) => firstLetter.push(currentValue[0]));

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// ! SECONDA SOLUZIONE
console.log(names.map((currentValueMap) => currentValueMap[0]));
