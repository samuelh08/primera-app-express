const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send(`<form action="/hello" method="post">
  <label for="name"><input type="text" id="name" name="name">
  <button type="submit">Enviar</button>
</form>`);
});

app.post('/hello', (req, res) => {
  res.send('<h1>Hola ' + req.body.name + '!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
