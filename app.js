const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
  if (req.params.name === undefined) {
    res.send('<h1>Hola desconocido!</h1>');
  } else {
    res.send(
      '<h1>Hola ' +
        req.params.name.charAt(0).toUpperCase() +
        req.params.name.slice(1) +
        '!</h1>',
    );
  }
});

app.listen(3000, () => console.log('Listening on port 3000!'));
