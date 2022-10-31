require('dotenv').config();
const express = require('express');
const path = require('path');

// const header1 = { 'Authorization': process.env.GITHUB_API_KEY }
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('../src'));
app.use(express.static('./client/dist'));

//PRODUCTS
app.post('/signup', (req, res) => {
  // send req.body to model


  res.status(200).send('Client signup data to be sent');
});

app.get('/login/:id', (req, res) => {
  // send req.body to model
  console.log(req.params.id);
  res.status(200).send(req.params.id);
});

const PORT = 3001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);