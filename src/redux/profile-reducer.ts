import {ActionType} from "./store";
import {PostType} from "../components/Profile/MyPosts/MyPosts";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type profileReducer = {
    postsData: Array<PostType>
    newPostText: string
}

let initialState = {
    postsData: [
        {
            id: 1,
            text: 'Hello, my name is Audrey Horne, and I\'m glad to see you',
            author: 'Audrey Horne',
            likesCount: 10
        },
        {id: 2, text: 'How are you?', author: 'Audrey Horne', likesCount: 12},
        {id: 3, text: 'The weather is good today, isn\'t is?', author: 'Audrey Horne', likesCount: 5},
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state: profileReducer = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.postsData.length + 1,
                text: state.newPostText,
                author: 'Audrey Horne', likesCount: 0
            }
            state.postsData.unshift(newPost)
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