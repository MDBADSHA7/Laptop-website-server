const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Laptop werehouse server running')
});

const products = [

    { id: 1, name: 'laptop', brand: 'hp', price: '30000' },
    { id: 2, name: 'laptop', brand: 'hp', price: '30000' },
    { id: 3, name: 'laptop', brand: 'hp', price: '30000' },
    { id: 4, name: 'laptop', brand: 'hp', price: '30000' },
]
app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log('code is running', 5000)
})
