
function sonoAnagrammi(parola1, parola2) {

    let p1 = "";
    let p2 = "";

    p1 = parola1;
    p2 = parola2;

    let lunghezzaParola1 = p1.length;
    let lunghezzaParola2 = p2.length;

    //confronto la  lunghezza, 
    if (lunghezzaParola1 !== lunghezzaParola2) {
        console.log("le parole hanno lunghezze differenti");
        return false
    }
    //restituisco vero o falso dopo aver ordinato le lettere delle parole
    return p1.split("").sort().join("") === p2.split("").sort().join(2);
}


function verifica() {
    let inserimento1 = document.getElementById("parola1").value;
    let inserimento2 = document.getElementById("parola2").value;
    let risultato = document.getElementById("risultato");

    console.log(inserimento1 + " " + inserimento2);

    if (sonoAnagrammi(inserimento1, inserimento2)) {
        risultato.textContent = "Le parole sono anagrammi"
    }
    else {
        risultato.textContent = "Le parole non sono anagrammi"
    }

}

