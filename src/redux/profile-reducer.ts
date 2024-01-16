
import {PostType} from "../components/Profile/MyPosts/MyPosts";


type AddPostACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export type ProfileActionsType = AddPostACType | UpdateNewPostTextACType

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

const profileReducer = (state: profileReducer = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: state.postsData.length + 1,
                text: state.newPostText,
                author: 'Audrey Horne', likesCount: 0
            }
            state.postsData.unshift(newPost)
            state.newPostText = ''
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.inputText!
            break;
        default:
            return state
    }
    return state
}


export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        inputText: text
    } as const
}

export default profileReducer;