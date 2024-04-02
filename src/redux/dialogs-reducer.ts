import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {ProfileActionsType} from "./profile-reducer";

export type ActionType = DialogsActionsType | ProfileActionsType

type DialogsReducer = {
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
}
type AddMessageACType = ReturnType<typeof addMessageAC>
export type DialogsActionsType = AddMessageACType 


let initialState = {
    messagesData: [
        {message: 'Hi', id: 1},
        {message: 'Hello, How are you', id: 2},
        {message: 'Yo', id: 3},
        {message: 'Just do it', id: 4},
    ],
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
                    message: action.message, id: state.messagesData.length + 1
                }]
            }
        default:
            return state
    }
}


export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-MESSAGE',
        message
    } as const
}


export default dialogsReducer;