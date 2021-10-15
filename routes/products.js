const express = require('express');

const ProductsService = require('./../services/products.service')

const router = express.Router();

const service = new ProductsService();


//Aquí solo recibo '/' por que este archivo estará manejando únicamente el endpoint de prodcutos
router.get('/', async (req, res) => {
  const products = await service.find();
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
router.get('/:id', async (req, res) => {
  //Indicamos que de todos los parámetros que tenga solo queremos el id
  const {id} = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

//Manejador para el método POST
router.post ('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//Manejador para el método PATCH para recibir objetos de forma parcial
router.patch ('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update ( id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

//Con este código podemos manejar una petición del tipo DELETE
//Indicamos que elemento borrar por medio del id en los parámetros
router.delete ('/:id', async (req, res) => {
  const { id } = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
});


module.exports = router;
