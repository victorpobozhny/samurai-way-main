import React from 'react'
import mainImg from "../images/main.jpg";
import s from '../css/Profile.module.css'



const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.main_image}><img
                src={mainImg}
                alt={'Main picture'}/>
            </div>
            <div>ava+description</div>
            <div className={s.posts}>My posts
                <div className={s.newPost}> new post</div>
                <div className={s.post}>Post1</div>
                <div className={s.post}>Post2</div>
                <div className={s.post}>post3</div>
            </div>
            <p>Main Content</p>
        </div>
    )
}

export default Profile;