import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';
dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

// receive request from user and create new product in database
app.post('/api/products', async (req, res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: 'All fields are required.' });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: 'Product created successfully.', data: newProduct });
    } catch (error) {
        console.error("Error creating product: " + error.message);
        res.status(500).json({ success: false, message: 'Server Error.' });
    }
});

// delete product from database
app.delete('/api/products/:id', async (req, res) => {
    const {id} = req.params; // get the id of the product to be deleted
    console.log("id:" + id); //show the id

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "product is deleted successfully"});
    } catch (error) {
        res.status(404).json({ success: false, message: 'Product not found.' });
    }
});


app.listen(5000, () => {
    connectDB();
    console.log('server started at http://localhost:5000 ');
}
)

