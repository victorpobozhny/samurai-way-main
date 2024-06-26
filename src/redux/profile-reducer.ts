import { Dispatch } from "redux";
import { profileAPI } from "../api/api";
import { PostType } from "../components/Profile/MyPosts/MyPosts";


type AddPostACType = ReturnType<typeof addPostAC>
export type ProfileActionsType =
    AddPostACType
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setProfileStatus>

type ProfileReducer = {
    postsData: Array<PostType>
    profile: ProfileType
    status: string
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
    profile: {} as ProfileType,
    status: ''
}

const profileReducer = (state: ProfileReducer = initialState, action: ProfileActionsType): ProfileReducer => {
    switch (action.type) {
        case "PROFILE/SET-STATUS":
            return {...state, status: action.status}
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.payload.profile
            }
        case "ADD-POST":
            const newPost = {
                id: state.postsData.length + 1,
                text: action.newPostText,
                author: 'Audrey Horne', likesCount: 0
            }
            return {...state, postsData: [newPost, ...state.postsData]}
        default:
            return state
    }
}


export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}

export const setProfileStatus = (status: string) => {
    return {
        type: 'PROFILE/SET-STATUS',
        status
    } as const
}


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
                console.log(response)
                dispatch(setUserProfile(response.data))
            }
        )
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode == 0) {
                dispatch(setProfileStatus(status))
            }

        })
}
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setProfileStatus(res.data))
        })
}


export type ProfileType = {
    aboutMe: string | null;
    contacts: RootObjectContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: RootObjectPhotos;
}
export type RootObjectContacts = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink?: string | null;
}
export type RootObjectPhotos = {
    small: string;
    large: string;
}

export default profileReducer;