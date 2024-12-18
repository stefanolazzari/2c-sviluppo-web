//per dichiarare la funzione

function stampaNome(nome){

    console.log("Ciao " + nome);

}

//per chiamare la funzione
stampaNome("Stefano");
stampaNome("Pinco");
stampaNome("Palla")


function somma(a1,b2){
    let somma = a1+b2;
    console.log("Il risultato della somma è= " + somma);
}

somma(56,100);


//ritorno di un valore
function somma2(a,b){
    return a + b;
}


let risultatoSomma = somma2(34,56);


console.log("Il risultato della somma è: " + risultatoSomma);



//---------Funzione che verifica se il numero è pari------------------------------------


function sePari(numero){
    if(numero % 2 === 0){
        console.log("Il numero è pari");
    }else{
        console.log("Il numero è dispari");
    }

}

sePari(4);









