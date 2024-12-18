{
    var pincoPallaVar = 67; //obsoleto
}

 
{
    let pincoPallaLet = 34; // visibilità (scope) solo all'interno del blocco di codice
    console.log("Questa é pincoPallaLet: " + pincoPallaLet);
}


console.log("Questa é pincoPallaVar: " + pincoPallaVar);


//--------------:-) :-) -------------------


const esempio1 = 789;

console.log(esempio1);

esempio1 = "castagne";   // errore

console.log(esempio1);

//-----------------------------




function somma(a,b){

    return a + b;
}


const bottone1 = document.getElementById("bottone1");
bottone1.addEventListener("click", alert("ciao"));

let risultato = somma(23,4);


console.log("test= " + risultato);

