//var, let, e const sono utilizzati per dichiarare variabili, 
// ma hanno comportamenti diversi per quanto riguarda ad esempio scope (visibilità) e la riassegnabilità.


//var
//Scope: Ha uno scope globale o di funzione.
//Riassegnabilità: Si può riassegnare e ridefinire.
//obsoleto,può causare errori imprevisti poiché la variabile è visibile ovunque nello scope della funzione.
{
    var pincoPallaVar = 67; 
}



//let
//Scope: Ha uno scope di blocco {}.
//Riassegnabilità: Si può riassegnare, ma non ridefinire nello stesso scope.
{
    let pincoPallaLet = 34; // visibilità (scope) solo all'interno del blocco di codice
    console.log("Questa é pincoPallaLet: " + pincoPallaLet);
}


console.log("Questa é pincoPallaVar: " + pincoPallaVar);


//---------------------------------
//const
//Scope: Ha uno scope di blocco {}.
//Riassegnabilità: Non può essere riassegnata.

const esempio1 = 789;

console.log(esempio1);

esempio1 = "castagne";   // errore

console.log(esempio1);

//-----------------------------


