import {ActionType} from "./state";
import {PostType} from "../components/Profile/MyPosts/MyPosts";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type profileReducer = {
    postsData: Array<PostType>
    newPostText: string
}

const profileReducer = (state: profileReducer, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                text: state.newPostText,
                author: 'Audrey Horne', likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.inputText!
            break;
        default:
            return state
    }
    return state
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, inputText: text})

export default profileReducer;