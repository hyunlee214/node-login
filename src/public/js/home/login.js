"use strict";

//console.log('test');
//console.log('tesging');

const id = document.querySelector('#id'),   //ejs파일 안 태그
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('#button');

loginBtn.addEventListener('click', login);

function login() {
  const req = {
    id : id.value,
    psword: psword.value,
  };

  fetch('/login', { 
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((e) => {
      console.error('login error');
    });
}

 