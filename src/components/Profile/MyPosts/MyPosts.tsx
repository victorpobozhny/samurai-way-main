import React, {RefObject, useRef} from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsPropsType = {
    postsData: Array<PostType>
}
export type PostType = {
    id: number
    text: string
    author: string
    likesCount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    const posts = props.postsData.map(el => {
        return <Post text={el.text} author={el.author} id={el.id} likesCount={el.likesCount}/>
    })
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            console.log(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <div>
                    <textarea placeholder={'Write something'} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;