function sonoAnagrammi(parola1, parola2) {

    let p1 = "";
    let p2 = "";

    p1 = parola1;
    p2 = parola2;

    let lunghezzaParola1 = p1.length;
    let lunghezzaParola2 = p2.length;

    //confronto la  lunghezza
    if (lunghezzaParola1 !== lunghezzaParola2) {
        return false
    }

}


console.log(sonoAnagrammi("casa", "piede"));