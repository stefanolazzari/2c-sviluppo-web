
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

controllaSeListaVuota(); //chiama la funzione 



bottoneAggiungi.addEventListener('click', function () {

    const nuovoElemento = document.createElement('li');
    const userInput = prompt("inserisci un testo");
    const iconaCestino = document.createElement('span');

    nuovoElemento.textContent = userInput;
    iconaCestino.textContent = " 🗑️"
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


const salvaPulsante = document.getElementById('saveButton');

// Funzione per inviare la lista al server
function salvaListaNelFile() {
  const elementiLista = [];

  // Estrai i testi dagli elementi della lista
  Array.from(lista.children).forEach((elemento) => {
    if (elemento.id !== 'messaggioVuota') {
      elementiLista.push(elemento.textContent.replace('🗑️', '').trim());
    }
  });

  if (elementiLista.length === 0) {
    alert("La lista è vuota. Nulla da salvare.");
    return;
  }

  // Invia i dati al server
  fetch('http://localhost:3000/salva-lista', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lista: elementiLista })
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => console.error('Errore:', error));
}

// Assegna l'evento al pulsante
salvaPulsante.addEventListener('click', salvaListaNelFile);
