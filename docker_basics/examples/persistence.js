const express = require('express');
const fs = require('fs');
const moment = require('moment');

const app = express();

const PORT = process.env.PORT;
const FILEPATH = 'data/apiStatus.json';

const updateApiStatus = () => {
  const api_status = JSON.parse(fs.readFileSync(FILEPATH, 'utf8'));
  const currentTime = moment().format("HH:mm:ss");

  api_status.timestamps.push(currentTime);

  fs.writeFileSync(FILEPATH, JSON.stringify(api_status), 'utf8');

  return api_status;
}

app.get('/', async(req, res) => {
  const updated_api_status = updateApiStatus();

  res.json(updated_api_status);
});

app.listen(PORT, () => {
  console.log(`Listent To Port....${PORT}`);
});
