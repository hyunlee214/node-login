"use strict";

const UserStorage = require('../../models/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
    psword = req.body.psword;
 
    const users = UserStorage.getUsers('id','psword');   //로그인 검증 기능

    const response = {};    //오브젝트 생성
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = 'login실패';
    return res.json(response);

  },
};

module.exports = {
  output,
  process,
};

