const mysql = require("mysql");

const db = mysql.createConnection({
  host: "node-login.cxwohdc7ogaq.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "ajddhkf1234",
  database: "node_login",
});

db.connect(); 

module.exports = db;