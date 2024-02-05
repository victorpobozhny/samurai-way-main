import React from 'react'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import store, {AppRootStateType} from "../../../redux/redux-store";
//задача контейнерной компоненты - быть оберткой вокруг презентационной компоненты и общаться с redux и store
// то есть презентационная компонента - просто рисует и вызыввает колбэки, иногда передавая наверх что-то по мелочи
//и понятия не имеет ни о чем другом
// все пропсы должны идти через нее, в обход нельзя
// state доступен благодаря тому, что обертка компоненты App получает store, который делает для нас доступным state с помощью store.getState()
const mapStateToProps = (state: AppRootStateType) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = () => {
    return {
        updateNewPostText: (text: string) => {
            store.dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            store.dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;