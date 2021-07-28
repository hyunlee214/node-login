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
  static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);        
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {                 // 클라이언트에서 전달한 데이터를 저장해주는 함수 생성
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success : true }; 
  }
} 

module.exports = UserStorage;