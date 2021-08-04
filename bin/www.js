'use strict';  

const app = require('../log');
const PORT = process.env.PORT || 3333;


app.listen(PORT, () => {
  console.log('서버 start');
});