import React from 'react'
import "./posts.css"

import Post from '../post/Post';
export default function Posts() {
    return (
        <div className="posts">

            <div className="postsDesc">
                <p>Đề xuất của bạn</p>
                <div className="postsImg">
                    <img src="images/Rectangle 32.png" alt="Món Việt" />
                    <img src="images/Rectangle 33.png" alt="Món Nhật" />
                    <img src="images/Rectangle 34.png" alt="Món Thái" />
                    {/* <p className="postsImg1">Món Việt</p>
                    <p className="postsImg2">Món Nhật</p>
                    <p className="postsImg3">Món Thái</p> */}
                </div>

            </div>
            <div className="postsList">
                <ul className="postsItem">
                    <li className="postsListItem">Tất cả</li>
                    <li className="postsListItem">Ăn sáng</li>
                    <li className="postsListItem">Ăn trưa</li>
                    <li className="postsListItem">Ăn tối</li>
                    <li className="postsListItem">Ăn vặt</li>
                    <li className="postsListItem">Coffee</li>
                </ul>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
