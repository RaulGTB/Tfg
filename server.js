const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// Cambia esta ruta para que apunte a la carpeta 'browser' dentro de 'dist/esport-app'
app.use(express.static(path.join(__dirname, 'dist/esport-app/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/esport-app/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
