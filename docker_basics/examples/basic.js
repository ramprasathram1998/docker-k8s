const express = require('express');
const app = express();

const fs = require('fs');
const moment = require('moment');

const PORT = process.env.APP_PORT;
  
app.get('/', async(req, res) => {
  
  console.log('I am a Log made when you hit the api');

  res.send('I am running in Kubernetes.....')
});

app.listen(PORT, () => {
  console.log(`Listent To Port....${PORT}`);
});