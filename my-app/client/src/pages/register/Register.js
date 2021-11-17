import React from 'react'
import "./register.css"
import{Link} from "react-router-dom"

export default function Register() {
    return (
        <div className="register">
            <div className="registerColumn">
                <div className="registerColumn1">
                    <img src="https://media.istockphoto.com/photos/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-picture-id835271096?k=20&m=835271096&s=612x612&w=0&h=slpW4QOVnDLlv6ayevlxwtcOIKCjTvOwxe7BZBOMmvc=" />
                </div>
                <div className="registerColumn2">

                    <form className="registerForm">
                        <span className="registerTitle">Đăng kí</span>
                        <label>Username</label>
                        <i class="registerUserIcon fas fa-user-astronaut"></i>
                        <input type="text" placeholder="Username của bạn" className="registerInput" />
                        <label>Email</label>
                        <i class="registerEmailIcon fas fa-user-astronaut"></i>
                        <input type="text" placeholder="Email của bạn" className="registerInput" />
                        <label>Password</label>
                        <i className="registerPasswordIcon fas fa-lock"></i>
                        <input type="password" placeholder="Mật khẩu" className="registerInput" />
                        <button className="registerButton">Đăng kí</button>
                    </form>
                    {/* <a className="registerLoginButton"> */}
                    <Link to="/login" className="link registerLoginButton">Đăng nhập</Link>
                    {/* </a> */}
                </div>

            </div>

        </div>
    )
}
