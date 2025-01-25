
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


// Seleziona il pulsante per salvare
const salvaPulsante = document.getElementById('saveButton');

// Funzione per salvare la lista in un file JSON
function salvaListaInJson() {
  const elementiLista = [];
  
  // Itera sugli elementi della lista
  Array.from(lista.children).forEach((elemento) => {
    // Ignora l'elemento "La lista è vuota"
    if (elemento.id !== 'messaggioVuota') {
      elementiLista.push(elemento.textContent.replace('🗑️', '').trim());
    }
  });

  if (elementiLista.length === 0) {
    alert("La lista è vuota. Nulla da salvare.");
    return;
  }

  // Crea un oggetto JSON
  const jsonData = JSON.stringify(elementiLista, null, 2); // Formatta con 2 spazi

  // Crea un blob e un link per il download
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'lista.json';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Aggiungi l'evento click al pulsante "Salva"
salvaPulsante.addEventListener('click', salvaListaInJson);
