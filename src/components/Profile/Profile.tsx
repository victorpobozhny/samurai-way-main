import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileProps = {
profile: ProfileType
}

const Profile = (props: ProfileProps) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;