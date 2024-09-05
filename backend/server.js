import express from 'express';

const app = express();

app.get('/products', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log('server started at http://localhost:5000 ');
}
)