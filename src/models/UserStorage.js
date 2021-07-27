"use strict";

class UserStorage {
  static #users = {
    id: ['hyunlee', 'jo', 'han'],
    psword: ['0000', '1111', '2222'],
 
    name: ['이현', '조성윤', '한규태'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
        }, {});
    return newUsers;
  }
} 

module.exports = UserStorage;