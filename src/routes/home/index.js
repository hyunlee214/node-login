//log.js 라우팅분리

"use strict";

const express = require('express');
const router = express.Router();
 
const ctrl = require('./home.ctrl');
 
router.get('/', ctrl.output.home); 
router.get('/login', ctrl.output.login); 
router.get('/register', ctrl.output.register);
router.post('/login', ctrl.process.login);

module.exports = router;

//log.js와의 연결을 위해 라우터를 외부파일에서 사용할 수 있게 해주는 역할 
     //외부로 내보내기 해주는 명령어
