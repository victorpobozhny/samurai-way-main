import React from 'react'
import s from './Profile.module.css'
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    updateNewPostText:(inputText: string)=>void
    addPost: ()=>void
    state: {
        postsData: Array<PostType>
        newPostText: string
    }
}
const Profile = (props: ProfilePropsType) => {
       return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.state.postsData}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;