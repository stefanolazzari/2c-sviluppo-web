const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware per permettere richieste JSON e CORS
app.use(express.json());
app.use(cors());

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



