const express = require ('express');

const app = express();

app.get ('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    home
  </body>
  </html>
  `);
});

app.get ('/login', (req, res) => {
  res.send(` 
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="text" placeholder ="id"><br>
  <input type="text" placeholder ="pw"><br>
  <button>로그인</button>
</body>
</html>
`);
});

app.listen(3333, () => {
  console.log('서버 start')
});