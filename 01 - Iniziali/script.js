/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// ! PRIMA SOLUZIONE
// Dichiara la funzione qui.
function getFirstLetter(words) {
  const firstLetter = [];

  words.forEach((currentValue) => firstLetter.push(currentValue[0]));
  return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console
getFirstLetter(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// ! SECONDA SOLUZIONE
console.log(names.map((currentValueMap) => currentValueMap[0]));
