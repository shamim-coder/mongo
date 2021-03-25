const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = 4000;

const products = [
    {
        id: 1,
        name: "mouse",
        type: 'input',
        price: 250
    },
    {
        id: 2,
        name: "keyboard",
        type: 'input',
        price: 380
    },
    {
        id: 3,
        name: "printer",
        type: 'output',
        price: 7000
    },
    {
        id: 4,
        name: "pen drive",
        type: 'output',
        price: 550
    }
]
app.get('/products/:id', (req, res) => {
    const proId = req.params.id;
    const id = products[proId - 1]
    res.send(id)
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.post('/addProduct', (req, res) => {
    const newProduct = req.body
    newProduct.id = 6
    res.send(newProduct)
})


app.listen(port, () => console.log(`app listening on port ${port}`))
