"use strict";

const db = require("../config/db");
const e = require('express');

class UserStorage {


  static getUserInfo(id) {                            // Promise안에 있는 구문이 성공하면 resolve값, 실패하면 reject값 실행
    return new Promise((resolve, reject) => {          
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query,[id], (err, data) => {
        if (err) reject(`${err}`);
        console.log(data[0]);
        resolve(data[0]);
      });  
  });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {          
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query,[userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve ({ success: true });
      });  
  });

  }
}

module.exports = UserStorage;