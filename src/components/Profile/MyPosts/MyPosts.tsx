import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <div>
                    <textarea placeholder={'Write something'}/>
                </div>
                <div>
                    <button>new post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post text={'Hello, my name is Audrey Horne, and I\'m glad to see you'} author={'Audrey Horne'}/>
                <Post text={'How are you?'} author={'Audrey Horne'}/>
                <Post text={'The weather is good today, isn\'t is?'} author={'Audrey Horne'}/>
            </div>
        </div>
    )
}

export default MyPosts;