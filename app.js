const express = require('express');
const app = express();

app.get('/', (req, res) => {
  for (let index = 1; index <= 50; index++) {
    res.write(`<p>${index} ${index % 2 === 0 ? 'Soy Par!' : 'Soy Impar!'}</p>`);
  }
  res.send();
});

app.listen(3000, () => console.log('Listening on port 3000!'));
