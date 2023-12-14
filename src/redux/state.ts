import AudreyHorn from "./../images/firends/AudreyHorn.png";
import MartyMcFly from './../images/firends/MartyMcFly1.jpg'
import Neo from './../images/firends/Neo1.jpg'
import {AppStateType} from "../App";

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export type ActionType = {
    type: string
    inputText?: string
}

let store = {
    _state: {
        dialogsPage: {
            messagesData: [
                {message: 'Hi', id: 1},
                {message: 'Hello, How are you', id: 2},
                {message: 'Yo', id: 3},
                {message: 'Just do it', id: 4},
            ],
            newMessage: '',
            dialogsData: [
                {
                    name: 'Victor',
                    id: 1
                },
                {
                    name: 'Andrew',
                    id: 2
                },
                {
                    name: 'Nickolas',
                    id: 3
                },
                {
                    name: 'Amanda',
                    id: 4
                },
                {
                    name: 'Anastasia',
                    id: 5
                },
            ]
        },

        profilePage: {
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
        },
        friends: [
            {
                name: 'Audrey',
                surname: 'Horne',
                avatar: AudreyHorn
            },
            {
                name: 'Marty',
                surname: 'McFly',
                avatar: MartyMcFly
            },
            {
                name: 'Thomas',
                surname: 'Anderson',
                avatar: Neo
            },
        ]
    },
    _callSubscriber(s: AppStateType) {

    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: AppStateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {  //type
        if (action.type == ADD_POST) {
            const newPost = {
                id: this._state.profilePage.postsData.length + 1,
                text: this._state.profilePage.newPostText,
                author: 'Audrey Horne', likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(store._state)
        } else if (action.type == UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.inputText!
            this._callSubscriber(this._state)
        } else if (action.type == ADD_MESSAGE) {
            this._state.dialogsPage.messagesData.push({
                message: this._state.dialogsPage.newMessage,
                id: this._state.dialogsPage.messagesData.length + 1
            })
            this._state.dialogsPage.newMessage = ''
            this._callSubscriber(this._state)
        } else if (action.type == UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.inputText!
            this._callSubscriber(this._state)
        }
    }
}
//ActionCreators

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, inputText: text})
export const addMessageCreateAction = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreateAction = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, inputText: text})

export default store;
console.log(store)