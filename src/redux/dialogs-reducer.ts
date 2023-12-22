import {ActionType} from "./store";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type dialogsReducer = {
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    newMessage: string
}


let initialState = {
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
}

const dialogsReducer = (state: dialogsReducer = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesData.push({
                message: state.newMessage,
                id: state.messagesData.length + 1
            })
            state.newMessage = ''
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.inputText!
            break;
        default:
            return state
    }
    return state
}


export const addMessageCreateAction = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreateAction = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, inputText: text})

export default dialogsReducer;