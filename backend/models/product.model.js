/*
Models represent the structure and behavior of data in your application. 
In the context of MongoDB and Mongoose, models are used to define the schema 
for your database collections. Each model corresponds to a MongoDB collection 
and defines the fields (e.g., name, price, image) and their data types. 
Models are typically created in separate files and exported for use in other parts of the codebase. 
*/

import mongoose from "mongoose";

// create a schema for products. It will have name, price, and image.

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
},{timestamps: true});

//create the product
const Product = mongoose.model("Product", productSchema);

export default Product; 
//By exporting the Product model, it can be imported and used in other parts of the codebase
