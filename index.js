const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!',
    description: 'super cool'
  });
});

const server = app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});