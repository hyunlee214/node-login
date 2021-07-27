"use strict";

class UserStorage {
  static #users = {      //변수 은닉화 
    id: ['hyunlee', 'jo', 'han'],
    psword: ['0000', '1111', '2222'],
 
    name: ['이현', '조성윤', '한규태'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {    //users에 해당하는 key값이 있는지
        newUsers[field] = users[field];
      }
      return newUsers;    //return되는 newUsers가 다음 파라미터로 들어가면서 계속해서 반복 
        }, {});
    return newUsers;
  }
} 

module.exports = UserStorage;