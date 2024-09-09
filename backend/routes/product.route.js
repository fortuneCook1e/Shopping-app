/*
Routes define the endpoints (URLs) of your application and 
specify the HTTP methods (GET, POST, PUT, DELETE, etc.) 
that can be used to access those endpoints. 
In Express.js, routes are defined using the app.get(), app.post(), 
app.put(), and app.delete() methods. Routes are typically organized 
into separate files and imported into your main server file (server.js).
*/

import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();

// receive request from user and create new product in database
router.post('/', createProduct);

// delete product from database
router.delete('/:id', deleteProduct);

// get all products from database
router.get('/', getProducts);

// update product in database
router.put('/:id', updateProduct);

export default router;