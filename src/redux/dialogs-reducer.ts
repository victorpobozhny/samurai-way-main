import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {ProfileActionsType} from "./profile-reducer";

export type ActionType = DialogsActionsType | ProfileActionsType

type DialogsReducer = {
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    newMessage: string
}
type AddMessageACType = ReturnType<typeof addMessageAC>
type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export type DialogsActionsType = AddMessageACType | UpdateNewMessageTextACType


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

const dialogsReducer = (state: DialogsReducer = initialState, action: DialogsActionsType): DialogsReducer => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state, messagesData: [...state.messagesData, {
                    message: state.newMessage, id: state.messagesData.length + 1
                }], newMessage: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessage: action.inputText}
        default:
            return state
    }
}


export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        inputText: text
    } as const
}

export default dialogsReducer;