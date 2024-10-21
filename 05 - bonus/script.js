/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
const newFunction = (username) => {
  let now = new Date();
  const hours = now.getHours();
  const minute = now.getMinutes();
  let msg = "";

  if (hours >= 0 && hours < 13) {
    msg = `Buongiorno`;
  } else if (hours >= 13 && hours < 17) {
    msg = `Buon pomeriggio`;
  } else {
    msg = `Buonasera`;
  }

  console.log(`Orario attuale: ${hours}:${minute}`);
  console.log(`${msg} ${username}`);
};

// Invoca la funzione qui e stampa il risultato in console
newFunction(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
