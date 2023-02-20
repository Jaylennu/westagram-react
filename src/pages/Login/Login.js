import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <main className="login_box">
            <h1 className='westagram'>Westagram</h1>
            <input id="LoginId" className="login_id" type="name" placeholder=" 전화번호, 사용자이름 또는 이메일" required></input>
            <input id="LoginPw" className="login_pw" type="password" placeholder=" 비밀번호" required></input>
            <button id="LoginBtn" className="login_btn">로그인</button>  
            <a className="forgot_pw" href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
        </main>
)};

export default Login;