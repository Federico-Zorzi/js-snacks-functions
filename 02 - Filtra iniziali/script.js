/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const userLetter = prompt("Inserisci una lettera");

// Dichiara la funzione qui.

const newNameListFunction = (namesList, userLetter) => {
  let newNameList = [];
  for (let i = 0; i < namesList.length; i++) {
    let currentValueAr = namesList[i];
    if (currentValueAr[0] === userLetter) {
      newNameList.push(currentValueAr);
    }
  }
  console.log(newNameList);
};

// Invoca la funzione qui e stampa il risultato in console
newNameListFunction(names, userLetter);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
