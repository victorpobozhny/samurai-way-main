import React from 'react'
import s from './Profile.module.css'
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    addPost: (postMessage: string)=>void
    state: {
        postsData: Array<PostType>
    }
}
const Profile = (props: ProfilePropsType) => {
       return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;