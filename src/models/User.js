//로그인, 회원가입 기능 모델

"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, psword }= UserStorage.getUsersInfo(body.id);

    if (id) {
     if (id === body.id && psword === body.psword) {
       return { success : true };    // id가 같으면 true 리턴
      }  
      return { success : false, msg : '비밀번호가 틀립니다'}    // id존재, but비번이 다르면 
    }
    return { success : false, msg : '없는 아이디입니다'}      //id가 존재하지 않으면 
  }
} 


module.exports = User;






// if (id === this.body.id && psword === this.body.psword)
// storage에서 가져온 id,pw와 사용자가 입력한 id,pw가 같은지  