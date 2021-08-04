"use strict";

const id = document.querySelector('#id'),   //ejs파일 안 태그
  name = document.querySelector('#name'),
  psword = document.querySelector('#psword'),
  confirmPsword = document.querySelector('#confirm-psword'),
  registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {
  if (!id.value) return alert ('아이디를 꼭 입력해주세요'); 
 
  if (psword.value !== confirmPsword.value) 
    return alert ('비밀번호가 서로 다릅니다');
 
  const req = {
    id : id.value,
    name : name.value,
    psword: psword.value,
  };
 

  fetch('/register', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())     // 서버로부터 응답이 오면, json메서드 호출
    .then((res) => {               // 서버에 응답이 모두 받아지는 순간 프로미스 객체 반환 => 완료 시 두번째 then으로 접근 가능
      if (res.success) {           // res로 접근한 후, 성공 시 로그인 페이지로 , 실패 시 , alert 창 가동 
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((e) => {
      console.error('회원가입 error');
    });
} 

 