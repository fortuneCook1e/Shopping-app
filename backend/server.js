import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

const __dirname = path.resolve();
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NODE_ENV bool:', process.env.NODE_ENV === "production");
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    console.log('static assets')
    app.use(express.static(path.join(__dirname, '/frontend/dist'))); 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}
console.log('not static assets')
console.log('NODE_ENV:', process.env.NODE_ENV);

app.listen(PORT, () => {
    connectDB();
    console.log('server started at http://localhost:' + PORT);
}
)

