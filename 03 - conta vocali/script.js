/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const vowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.
const vowelsNumber = (word, vowelsArray) => {
  let vowelsNum = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowelsArray.includes(word[i])) vowelsNum++;
  }
  return "il numero di vocali e': " + vowelsNum;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsNumber(word, vowels));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
