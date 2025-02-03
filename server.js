const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Servire la cartella pubblica
app.use(express.static(path.join(__dirname, 'public')));



// Percorso del file JSON
const filePath = path.join(__dirname, 'lista.json');

// API per salvare la lista in un file JSON
app.post('/salva-lista', (req, res) => {
  const lista = req.body.lista;

  if (!Array.isArray(lista)) {
    return res.status(400).json({ message: 'Dati non validi' });
  }

  fs.writeFile(filePath, JSON.stringify(lista, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Errore nel salvataggio' });
    }
    res.json({ message: 'Lista salvata con successo!' });
  });
});


// Avvia il server
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});


