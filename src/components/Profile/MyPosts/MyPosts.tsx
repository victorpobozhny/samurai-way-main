import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {
    return (
            <div className={s.posts}>My posts
                <div className={s.newPost}>
                   <textarea placeholder={'Write something'}/>
                    <button>new post</button>
                </div>
                <Post text={'Hello, my name is Audrey Horne, and I\'m glad to see you'} author={'Audrey Horne'}/>
                <Post text={'How are you?'} author={'Audrey Horne'}/>
                <Post text={'The weather is good today, isn\'t is?'} author={'Audrey Horne'}/>
            </div>
    )
}

export default MyPosts;