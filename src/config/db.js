const mysql = require("mysql");

const db = mysql.createConnection({
  host: "node-login.cxwohdc7ogaq.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  pssword: "ajddhkf1234",
  database: "node-login",
});

db.connect(); 

module.exports = db;