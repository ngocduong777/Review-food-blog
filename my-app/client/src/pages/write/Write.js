import React from 'react'
import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
                src="https://cdn.pixabay.com/photo/2013/08/09/05/54/layer-170971__340.jpg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                </div>
                <div className="writeFormGroup">
                    <div >
                        <input type="type" placeholder="Tiêu đề" className="writeInput" autoFocus={true} />
                        <textarea rows="12" placeholder="Nội dung bài viết..." type="text" className="writeInput writeText"></textarea>
                    </div>
                    <div>
                        <i className="writeStar fas fa-map-marker-alt"></i>
                        <input placeholder="Địa chỉ" type="text" className="writeInput writeText" />
                        <label htmlFor="rating" className="writeLabelRating">Đánh giá</label>
                        <input type="text" className="writeRating writeText" id="rating" maxlength="3" size="3" />
                        <label htmlFor="rating" className="writeLabelRating">/ 5 <i className="writeRatingIcon fas fa-star"></i></label>
                    </div>
                </div>
                <button className="writeSubmit">Đăng bài</button>
            </form>
        </div>
    )
}
