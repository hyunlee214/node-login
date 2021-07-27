"use strict";

const User = require('../../models/User');
const UserStorage = require('../../models/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  
  login: (req, res) => {
    res.render('home/login');
  },
};

// 기존 로직 없이 'users.login'으로만 login기능을 가능하게 구현
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};

