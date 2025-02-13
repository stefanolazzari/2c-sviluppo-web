
function sonoAnagrammi(parola1,parola2){
    let parola1Clean = parola1.replace(/\s+/g, '').toLowerCase();
    let parola2Clean = parola2.replace(/\s+/g, '').toLowerCase();
    console.log(parola1Clean,parola2Clean);
}

p1 = "ciA u";
p2 = "BeLL o"


sonoAnagrammi(p1,p2);