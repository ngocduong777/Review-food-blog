import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginColumn">
                <div className="loginColumn1">
                    <img src="https://media.istockphoto.com/photos/banh-mi-sandwich-classic-japanese-vietnamese-or-thai-cuisine-favorite-picture-id1256921788?b=1&k=20&m=1256921788&s=170667a&w=0&h=ekBhjCcLRU3RwK_Xn7LI3dCQCZD29fYa1-IWb2xfiE8=" />
                </div>
                <div className="loginColumn2">
                   
                    <form className="loginForm">
                    <span className="loginTitle">Đăng nhập</span>
                        <label>Email</label>
                        <i class="loginUserIcon fas fa-user-astronaut"></i>
                        <input type="text" placeholder="Email của bạn" className="loginInput"/>
                        <label>Password</label>
                        <i className="loginPasswordIcon fas fa-lock"></i>
                        <input type="password" placeholder="Mật khẩu" className="loginInput"/>
                        <button className="loginButton">Đăng nhập</button>
                    </form>
                    {/* <a className="loginRegisterButton">
                        <Link to="/register" className="link">Đăng kí</Link>
                    </a> */}
                    <Link to="/register" className="link loginRegisterButton">Đăng kí</Link>
                </div>
                
            </div>
            
        </div>
    )
}
