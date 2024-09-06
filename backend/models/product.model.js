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
