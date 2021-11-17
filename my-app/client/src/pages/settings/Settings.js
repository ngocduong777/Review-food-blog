import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Thông tin cá nhân
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>

                </div>
                
                <form className="settingsForm">
                    <label>Ảnh đại diện</label>
                    <div className="settingsPP">
                        <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-astronaut"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <div className="test">
                        <div>
                            <label>Username</label>
                            <input type="text" placeholder="ngocduong777" />

                        </div>
                        <div>
                            <label>Ngày sinh</label>
                            <input type="date" placeholder="" />
                        </div>
                    </div>
                    <label>Email</label>
                    <input type="email" placeholder="ngocduong@gmail.com" />
                    <label>Địa chỉ</label>
                    <input type="text" placeholder="Nhà Minh Ánh" />
                    <label>Món ăn yêu thích</label>
                    <input type="email" placeholder="Không ăn gì hết :(" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Cập nhật</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}
