const express = require('express');
const faker = require('faker');

const router = express.Router();

//Aquí solo recibo '/' por que este archivo estará manejando únicamente el endpoint de prodcutos
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//Todos los endpoints específicos deben de ir antes de lo que es dinámico
//Si lo pusieramos debajo del endpoint ('/products/:id') interpretaría filter como un parámetro
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//Ahora definimos nuestra ruta donde recibiremos un parámetro id
//donde anteponemos : para indicarle que será un parámetro
//Todos los datos recibidos en un parámetro los convertirá a String
router.get('/:id', (req, res) => {
  //Indicamos que de todos los parámetros que tenga solo queremos el id
  const {id} = req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: 2000
  });
});

//Manejador para el método POST
router.post ('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

//Manejador para el método PATCH para recibir objetos de forma parcial
router.patch ('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id
  });
});

//Con este código podemos manejar una petición del tipo DELETE
//Indicamos que elemento borrar por medio del id en los parámetros
router.delete ('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});


module.exports = router;
