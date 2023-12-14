import React, {useRef} from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsPropsType = {
    postsData: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (inputText: string)=>void
}
export type PostType = {
    id: number
    text: string
    author: string
    likesCount: number
}

const MyPosts = (props: MyPostsPropsType) => {
    console.log(props.postsData)
    const posts = props.postsData.map(el => {
        return <Post text={el.text} author={el.author} id={el.id} likesCount={el.likesCount}/>
    })
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost()


        }
    }

    const onPostChange = () => {
       let text = newPostElement.current!.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <div>
                    <textarea placeholder={'Write something'} ref={newPostElement} value={props.newPostText}
                              onChange={onPostChange}/>
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