import React from 'react'
import s from './Profile.module.css'
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    postsData: Array<PostType>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;