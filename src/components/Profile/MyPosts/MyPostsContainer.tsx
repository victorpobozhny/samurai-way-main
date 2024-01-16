import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

//задача контейнерной компоненты - быть оберткой вокруг презентационной компоненты и общаться с redux и store
// то есть презентационная компонента - просто рисует и вызыввает колбэки, иногда передавая наверх что-то по мелочи
//и понятия не имеет ни о чем другом
// все пропсы должны идти через нее, в обход нельзя
//const MyPostsContainer = (props: MyPostsPropsType) => {
const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store!.dispatch(addPostActionCreator())
                }

                const updateNewPostText = (text: string) => {
                    store!.dispatch(updateNewPostTextActionCreator(text))
                }

                return <MyPosts
                    updateNewPostText={updateNewPostText}
                    addPost={addPost}
                    postsData={store!.getState().profilePage.postsData}
                    newPostText={store!.getState().profilePage.newPostText}/>
            }}

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;