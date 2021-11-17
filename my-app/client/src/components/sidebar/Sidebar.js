import React from 'react'
import "./sidebar.css"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    <h1>Địa điểm nổi bật</h1>
                </span>
                <div className="card">

                        <div className="card-body">
                        
                            <img src="images/image 11.png" alt=""/>
                            <div className="card-text">
                                <h4>Gangnam Topokki</h4>
                                <p>714 Sư Vạn Hạnh,<br/>4.5/5<i class="fas fa-star"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <div className="card-body">
                           
                            <img src="images/mè 1.png" alt=""/>
                            <div className="card-text">
                                <h4>Chè mè đen & Bánh</h4>
                                <p>149 Nguyễn Thái Bình,<br/>4.5/5<i class="fas fa-star"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <div className="card-body">
                            
                            <img src="images/image 13.png" alt=""/>
                            <div className="card-text">
                                <h4>UyênUyên coffee</h4>
                                <p>Nhà Nam...<br/>10/10<i className="fas fa-star"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">

                        <div className="card-body">
                         
                            <img src="images/image 14.png" alt=""/>
                            <div className="card-text">
                                <h4>Lẩu cù lao</h4>
                                <p>410 Nguyễn Xí,<br/>4.3/5<i className="fas fa-star"></i>
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}
