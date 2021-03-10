const express = require('express');
const app = express();

const fs = require('fs');
const moment = require('moment');

const PORT = process.env.PORT;
  
app.get('/', async(req, res) => {
  res.json("I am Running in Containe");
});

app.listen(PORT, () => {
  console.log(`Listent To Port....${PORT}`);
});