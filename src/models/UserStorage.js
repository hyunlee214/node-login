"use strict";

const db = require("../config/db");
const e = require('express');
/*const fs = require("fs").promises;    // fs를 이용해 파일에 접근 */

class UserStorage {
  static #getUserInfo(data, id) {       //private한 변수나 메서드는 항상 클래스의 최상단에 위치하는게 좋음. 
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);        
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {    //users에 해당하는 key값이 있는지
        newUsers[field] = users[field];
      }
      return newUsers;    //return되는 newUsers가 다음 파라미터로 들어가면서 계속해서 반복 
        }, {});
    return newUsers;
  }
  
  static getUsers(isAll, ...fields) {

  }

  static getUserInfo(id) {
    db.query("SELECT * FROM users", (err, data) => {
      console.log(data);
    }); 
  }

  static async save(userInfo) {

  }
}

module.exports = UserStorage;