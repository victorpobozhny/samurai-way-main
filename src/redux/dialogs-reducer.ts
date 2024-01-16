import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {ProfileActionsType} from "./profile-reducer";

export type ActionType = DialogsActionsType | ProfileActionsType

type dialogsReducer = {
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

const dialogsReducer = (state: dialogsReducer = initialState, action: DialogsActionsType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messagesData.push({
                message: state.newMessage,
                id: state.messagesData.length + 1
            })
            state.newMessage = ''
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessage = action.inputText!
            break;
        default:
            return state
    }
    return state
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