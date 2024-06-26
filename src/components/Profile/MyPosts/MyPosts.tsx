import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import FormControl from '../../common/FormControl/FormControl';

export type MyPostsPropsType = {
    postsData: PostType[]
    addPost: (newPostText: string) => void
}
export type PostType = {
    id: number
    text: string
    author: string
    likesCount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    const posts = props.postsData.map(el => {
        return <Post key={el.id} text={el.text} author={el.author} id={el.id} likesCount={el.likesCount} />
    })

    const onAddPost = (values: AddPostForm) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}
export type AddPostForm = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

export const AddPostForm: React.FC<InjectedFormProps<AddPostForm>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.newPost}>
                <div>
                    <Field placeholder={'Write something'}
                        component={FormControl}
                        name='newPostText'
                        tagName={'textarea'}
                        validate={[required, maxLength10]} />
                </div>
                <div>
                    <button>new post</button>
                </div>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm<AddPostForm>({ form: 'ProfileAddNewPostForm' })(AddPostForm)

export default MyPosts;