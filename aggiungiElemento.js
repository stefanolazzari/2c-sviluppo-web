//Seleziona il bottone di aggiunta

const bottoneAggiungi = document.getElementById('bottoneAggiungi');
const bottoneTogli = document.getElementById('bottoneTogli');
const lista = document.getElementById('miaLista');

console.log(lista.children.length);


bottoneAggiungi.addEventListener('click', function() {

    const nuovoElemento = document.createElement('li');
    const userInput = prompt("inserisci un testo");
    const iconaCestino = document.createElement('span');

    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = " 🗑️"
    iconaCestino.style.cursor = "pointer";

    nuovoElemento.appendChild(iconaCestino);
    lista.appendChild(nuovoElemento);

    iconaCestino.addEventListener('click', function(){
            nuovoElemento.remove();
    })

})
