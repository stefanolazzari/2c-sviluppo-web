
const bottoneAggiungi = document.getElementById('bottoneAggiungi');
const lista = document.getElementById('miaLista');
const bottoneSvuota = document.getElementById('svuota'); 



function controllaSeListaVuota(){
    if (lista.children.length === 0) {
        const messaggioVuota = document.createElement("li"); // crea un elemento per il messaggio lista vuota
        messaggioVuota.textContent = "La lista è vuota";
        messaggioVuota.id = 'messaggioVuota'; 
        lista.appendChild(messaggioVuota);   
    } else {
        const messaggioVuota = document.getElementById('messaggioVuota');
        if (messaggioVuota) {
            messaggioVuota.remove(); // Rimuove il messaggio se la lista non è più vuota
          }
    }
}

controllaSeListaVuota(); //chiama la funzione all'inizio



bottoneAggiungi.addEventListener('click', function () {

    const nuovoElemento = document.createElement('li');
    const userInput = prompt("Inserisci il prodotto");
    const iconaCestino = document.createElement('span');

    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = "  🗑️"
    iconaCestino.style.cursor = "pointer";

    nuovoElemento.appendChild(iconaCestino);
    lista.appendChild(nuovoElemento);

    iconaCestino.addEventListener('click', function () {
        nuovoElemento.remove();
        controllaSeListaVuota(); //viene chiamata anche quando si clicca sul cestino
    })

    controllaSeListaVuota(); //viene chiamata anche quando si clicca sul bottone aggiungi

});


bottoneSvuota.addEventListener('click', function () {
    const confermaCanc = confirm("Sei sicuro di voler svuotare la lista?");
    if (confermaCanc) {
        if (lista.children.length > 0) {
            lista.innerHTML = '';  
            controllaSeListaVuota(); //viene chiamata anche quando si clicca sul bottone svuota
        }
    }
})







