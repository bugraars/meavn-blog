require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Merhaba, dünya!');
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}/`);
});
