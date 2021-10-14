const { app } = require('faker/lib/locales/en');
const express = require('express');
const productsRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');

function routerApi (app) {
  //Este código se usaría para definir un path global
  //En las líneas de abajo que definen el endpoint debería cambiar app.use por router.use
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
