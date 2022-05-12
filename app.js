const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const browser = req.get('sec-ch-ua');
  res.send(browser);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
