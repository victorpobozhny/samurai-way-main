import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType} from "./MyPosts/MyPosts";
import {EmptyObject, Store} from "redux";
import dialogsReducer from "../../redux/dialogs-reducer";
import profileReducer from "../../redux/profile-reducer";
import {AppPropsType, StoreType} from "../../App";

// export type ProfilePropsType = {
//     dispatch: (action: ActionType) => void
//     state: {
//         postsData: Array<PostType>
//         newPostText: string
//     }
// }
// type ProfileProps ={
//     store: StoreType
// }

const Profile = () => {


    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}

                // postsData={props.state.postsData}
                // dispatch={props.dispatch}
                // newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;