import {ActionType} from "./state";
import {MessagePropsType} from "../components/Dialogs/Message/Message";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type dialogsReducer = {
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    newMessage: string
}

const dialogsReducer = (state: dialogsReducer, action: ActionType) => {

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