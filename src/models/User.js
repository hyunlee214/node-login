//로그인, 회원가입 기능 모델

"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) { 
    this.body = body;
  }

  async login() {      // await사용시 비동기 async사용
    const client = this.body;
    const {id, psword} = await UserStorage.getUserInfo(client.id);
    // * await 은 promise를 반환하는 경우에서만 사용가능

    if (id) {
     if (id === client.id && psword === client.psword) {
       return { success : true };    // id가 같으면 true 리턴
      }  
      return { success : false, msg : '비밀번호가 틀립니다'};    // id존재, but비번이 다르면 
    }
    return { success : false, msg : '없는 아이디입니다'};    //id가 존재하지 않으면 
  }

  async register() {
    const client = this.body;
    try {
    const response = await UserStorage.save(client);
     return response;
  } catch (err) {
    return { success : false, msg: err};
  }
}
}
 
module.exports = User;




// if (id === this.body.id && psword === this.body.psword)
// storage에서 가져온 id,pw와 사용자가 입력한 id,pw가 같은지  