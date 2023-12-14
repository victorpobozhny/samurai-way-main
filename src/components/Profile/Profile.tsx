import React from 'react'
import s from './Profile.module.css'
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/state";

type ProfilePropsType = {
    dispatch: (action: ActionType) => void
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
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;