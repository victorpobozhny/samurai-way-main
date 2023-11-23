import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";

const postsData = [
    {id: 1, text: 'Hello, my name is Audrey Horne, and I\'m glad to see you', author: 'Audrey Horne', likesCount: 10},
    {id: 2, text: 'How are you?', author: 'Audrey Horne', likesCount: 12},
    {id: 3, text: 'The weather is good today, isn\'t is?', author: 'Audrey Horne', likesCount: 5},
]

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile;