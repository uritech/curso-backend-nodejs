const express = require('express');
const router = express.Router();

//De una categoría en específicio queremos todos los productos que le pertenecen
//Estamos haciendo uso de 2 parámetros
router.get('/:categoryId/products/:productId', (req, res) => {
  const{categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Producto 2',
    price: 2000
  });
});

module.exports = router;
