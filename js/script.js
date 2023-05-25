console.log('JS OK')
// +++++++++++++++++++++++
// OPERAZIONI PRELIMINARI
// +++++++++++++++++++++++

// Seleziono dal DOM l'elemento dove voglio inserire il mio risultato
const pswPlaceholder = document.getElementById('userPsw');
console.log(pswPlaceholder)

// Chiedo all'utente il suo nome e lo dichiaro in una variabile
const userName = prompt('Qual è il tuo nome?', 'Patric');
console.log(userName);

// Chiedo all'utente il suo cognome e lo dichiaro in una variabile
const userSurname = prompt('Qual è il tuo cognome?', 'Tobola');
console.log(userSurname);

// Chiedo all'utente il suo colore preferito e lo dichiaro in una variabile
const userColor = prompt('Qual è il tuo colore preferito?', 'Blu');
console.log(userColor);

// Creo una variabile con la somma dei 3 precedenti dati richiesti + `21` 
const userPsw = userName + userSurname + userColor + `21`;
console.log(userPsw);

// Inserisco la password nell'elemento selezionato precedentemente nel DOM
pswPlaceholder.innerText = userPsw;