import { connect } from "react-redux";
import { addPostAC } from '../../../redux/profile-reducer';
import store, { AppRootStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
//задача контейнерной компоненты - быть оберткой вокруг презентационной компоненты и общаться с redux и store
// то есть презентационная компонента - просто рисует и вызыввает колбэки, иногда передавая наверх что-то по мелочи
//и понятия не имеет ни о чем другом
// все пропсы должны идти через нее, в обход нельзя
// state доступен благодаря тому, что обертка компоненты App получает store, который делает для нас доступным state с помощью store.getState()
const mapStateToProps = (state: AppRootStateType) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = () => {
    return {
        addPost: (newPostText: string) => {
            store.dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;