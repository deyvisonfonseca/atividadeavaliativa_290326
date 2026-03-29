const { Router } = require('express');
const carController = require('../controllers/carController'); 

const routes = new Router();

// Rotas de Carros
routes.get('/cars', carController.listCars);
routes.get('/cars/:id', carController.getCar);
routes.post('/cars', carController.createCar);
routes.put('/cars/:id', carController.updateCar);
routes.delete('/cars/:id', carController.deleteCar);

module.exports = routes;