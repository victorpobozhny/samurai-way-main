import React from 'react'
import mainImg from "../../images/main.jpg";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.main_image}><img
                src={mainImg}
                alt={'Main picture'}/>
            </div>
            <div>ava+description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;