import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const postsData = [
    {id: 1, text: 'Hello, my name is Audrey Horne, and I\'m glad to see you', author: 'Audrey Horne', likesCount: 10},
    {id: 2, text: 'How are you?', author: 'Audrey Horne', likesCount: 12},
    {id: 3, text: 'The weather is good today, isn\'t is?', author: 'Audrey Horne', likesCount: 5},
]


const MyPosts = () => {

    const posts = postsData.map(el => {
        return <Post text={el.text} author={el.author} id={el.id} likesCount={el.likesCount}/>
    })

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
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;