const axios = require('axios');

let counter = 0;

while(counter <= 1000) {
  console.log(counter);

  axios.get('http://127.0.0.1:9092').then( res => {
    console.log("---------->", res.data)
  });

  counter += 1;
};