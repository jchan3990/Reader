const controller = require('./controller.js');
const cors = require('cors');
const path = require('path');
const Parser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(Parser.urlencoded({extended: true}));
app.use(Parser.json());
app.use(cors());

app.get('/api/reader', (req, res) => controller.get(req, res));
app.post('/api/reader', (req, res) => controller.add(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})