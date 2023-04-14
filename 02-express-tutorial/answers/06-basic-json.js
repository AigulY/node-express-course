const express = require('express');
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    // res.json([{name:'John'}, {name:'Susan'}])
   res.json(products)
})


app.listen(5000, () => {
    console.log('server is listening on the port 5000...')
})