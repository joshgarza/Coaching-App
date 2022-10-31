require('dotenv').config();
const express = require('express');
const path = require('path');

// const header1 = { 'Authorization': process.env.GITHUB_API_KEY }
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('../src'));

//PRODUCTS
app.get('/products', (req, res) => {
  axios.get(`${url}/products/?count=50`, header)
    .then(result => res.status(200).send(result.data));
});

const PORT = 3001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);