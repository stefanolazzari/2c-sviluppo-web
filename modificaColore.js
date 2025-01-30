const box = document.getElementById('box');
const pulsante = document.getElementById('cambiaColoreBtn');


function coloreCasuale(){
    const lettere = '0123456789ABCDEF';
    let colore = '#';

    for (let i = 0; i < 6; i++){
        colore += lettere[Math.floor(Math.random() * 16)];
    }
     
    return colore;

}


pulsante.addEventListener('click', function(){
    box.style.backgroundColor = coloreCasuale();
});