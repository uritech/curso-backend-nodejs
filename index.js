const express = require('express');
const routerApi = require('./routes');
const app = express(); //Creamos la aplicacion con express
const port = 3000;

//Este middleware es necesario para poder hacer uso de archivos json que nos envian por POST
app.use(express.json());

//Como estamos enviando una respuesta por eso lo hacemos por medio de res
app.get('/', (req, res) => {
  res.send('Hola he creado mi primer servidor en express');
});

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola estamos en una nueva ruta');
// });

routerApi(app);

//Inciamos la escucha y le indicamos en que puerto.
app.listen(port, () => {
  console.log('Servidor iniciado en http://localhost:' + port);
});
