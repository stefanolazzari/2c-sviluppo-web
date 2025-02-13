// /* Le funzioni in JavaScript sono blocchi di codice riutilizzabili che possono essere invocati per eseguire operazioni specifiche. 
// Una funzione in JavaScript può ricevere dei parametri (valori di input), eseguire del codice e restituire un valore (opzionale). 
// Le funzioni sono uno degli strumenti più potenti e versatili in JavaScript per organizzare e modularizzare il codice.
//  */


// //per dichiarare la funzione
// function stampaNome(nome){
//     console.log("Ciao " + nome);
// }

// //per chiamare la funzione
// stampaNome("Stefano");
// stampaNome("Pinco");
// stampaNome("Palla")
// //----------------------------------


// //Funzione con  parametri
// //Le funzioni possono accettare uno o più parametri, 
// // che sono i valori che vengono passati alla funzione quando viene invocata.
// // I parametri sono definiti nel momento della dichiarazione della funzione, 
// // ma quando la funzione viene invocata, vengono forniti i valori reali.

// function somma(a1,b2){
//     let somma = a1+b2;
//     console.log("Il risultato della somma è= " + somma);
// }

// somma(56,100);  //funzione invocata 

// //--------------------------------------------------------------


// //Valore di ritorno
// //Le funzioni possono restituire un valore utilizzando la parola chiave return. 
// // Quando una funzione incontra un return, interrompe l'esecuzione e restituisce il valore specificato.
// function somma2(a,b){
//     return a + b;
// }


// //Funzione espressione
// //Una funzione può anche essere definita come una espressione, assegnandola a una variabile. 
// // In questo caso, la funzione non ha un nome, se non quello della variabile.
// let risultatoSomma = somma2(34,56);


// console.log("Il risultato della somma è: " + risultatoSomma);



// //---------Funzione che verifica se il numero è pari------------------------------------


// function sePari(numero){
//     if(numero % 2 === 0){    // L'operatore % è chiamato modulo e viene utilizzato per calcolare il resto della divisione tra due numeri. 
//         console.log("Il numero è pari");
//     }else{
//         console.log("Il numero è dispari");
//     }

// }
// sePari(4);

// //----------------------------------------------------------------------------------




// function divisione(a,b){
//     let risultato = a / b;
//     return risultato
// }




// //funzione di callback, generalizzazione del problema

// function calcolo(a,b,funzDiCalcolo){
//     return funzDiCalcolo(a,b);
// }

// console.log(calcolo(40,7,divisione));

// //-----------------------------------------------------

function somma(a,b){
    return a + b;
}

function divisione(a,b){
    return a / b;
}

function sottrazione(a,b){
    return a - b;
}

function moltiplicazione(a,b){
    return a * b;
}

function modulo(a, b){
    return a % b;
}



function calcolo(a,b,tipoDiCalcolo){
    var risultato = tipoDiCalcolo(a,b);
    return risultato;
}



console.log("Il risultato della somma è: " + calcolo(200,40,somma));
console.log("Il risultato della divisione è: " + calcolo(200,40,divisione));
console.log("Il risultato del modulo di 500 e 400 è: " + calcolo(500,400,modulo));



function sommaParametri(parametro1,parametro2,parametro3){

   let risultatoTot = (parametro1 + parametro2)/parametro3;
   return risultatoTot;

}

console.log(sommaParametri(50,30,2));







