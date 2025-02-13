
// L'array è una struttura di dati semplice per memorizzare più valori

let elencoFrutta = ["kiwi", "banane", "pere","pesche","mandarini" ];


let arrayVoti = [40,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70,89,70]; //dichiarazione di array


console.log(arrayVoti[arrayVoti.length-1]);//stampa l'ultimo elemento

console.log(elencoFrutta);

let array1 = [];
elencoFrutta.sort();   
console.log(elencoFrutta);



console.log(elencoFrutta[0]);

console.log("La lunghezza di elencoFrutta é: "+ elencoFrutta.length);
console.log("La lunghezza di  é: array1: "+ array1.length);

//per accedere all'ultimo elemento

let ultimoElementoFrutta = elencoFrutta[0];

elencoFrutta.push("cachi"); //inserisce elemeto alla fine
console.log(elencoFrutta);

console.log(ultimoElementoFrutta);

elencoFrutta.shift(); //toglie il primo elemento
console.log(elencoFrutta);

elencoFrutta.unshift("pompelmo"); //inserisce elemento all'inizio
console.log(elencoFrutta);

elencoFrutta.pop(); //rimuove ultimo elemento
console.log(elencoFrutta);


let lettere = ["C","I","A","O"];
console.log(lettere.join(""));//stampa CIAO


let ordine = ["Z","F","K","A"];
console.log(ordine);

ordine.sort();  //ordina l'array
console.log(ordine);


let word1 = "roma";
let word2 = "amor";

console.log(word1.split("").sort());
console.log(word2.split("").sort());

