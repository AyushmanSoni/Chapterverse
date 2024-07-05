const express = require('express');
const app = express();
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(1000, () => {
  console.log(`server started`);
});
