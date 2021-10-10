const express = require('express');
const app = express(); //Creamos la aplicacion con express
const port = 3000;

//Como estamos enviando una respuesta por eso lo hacemos por medio de res
app.get('/', (req, res) => {
  res.send('Hola he creado mi primer servidor en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola estamos en una nueva ruta');
});


app.get('/productos', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000
  });
});

//Inciamos la escucha y le indicamos en que puerto.
app.listen(port, () => {
  console.log('Servidor iniciado en http://localhost:' + port);
});
