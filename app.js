const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  const message = ['Hello World!']
  if (process.env.FROM) {
    message.push(`FROM: ${process.env.FROM}`)
  }
  if (process.env.TO) {
    message.push(`TO: ${process.env.TO}`)
  }
  res.send(message.map(m => `<p>${m}</p>`).join(''));
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
