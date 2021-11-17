import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"
export default function Topbar() {
    const user = true;
    return (
        <div className="NavbarAfterLogin">

            <nav className="navbar  TC-sticky fixed-top r-nav TC-navbar">
                <div className="container">
                    {/* <a href="#" className="navbar-brand"> */}
                    <Link to="/" className="link navbar-brand">REVIEW</Link>
                    {/* </a> */}

                    <div className="navbar-nav col-md-5 ms-auto ">
                        <i className="fas fa-search icon-sreach"></i>
                        <input type="text" className="form-control" id="Searchbox" placeholder="Tìm kiếm địa điểm..." />
                    </div>

                    {user ? (
                        <button className="navbar-toggler navbar-nav-icon-ava" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                            {/* <span> <i className="fas fa-user-circle hamburger"></i></span> */}
                            <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg" alt="" />
                        </button>
                    ) : (

                        <Link to="/login" className="link loginUser">Đăng nhập</Link>


                    )}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link">{
                                    user && "Log out"
                                }</a>
                            </li>
                            <li className="nav-link">
                            <Link to="/settings" className="link">Profile</Link>
                            </li>
                       
                            <li className="nav-link">
                            <Link to="/write" className="link">Tạo bài biết</Link>
                            </li>



                        </ul>
                    </div>

                </div>


            </nav >

        </div >
    )
}
