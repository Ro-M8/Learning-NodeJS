const express = require('express');
const app = express();

const port = 8080;


const path = require('path');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});