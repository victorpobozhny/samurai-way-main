import React, {useRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {ActionType} from "../../redux/store";
import {addMessageCreateAction, updateNewMessageTextCreateAction} from '../../redux/dialogs-reducer'
import {StoreType} from "../../App";
import Dialogs from "./Dialogs";

// type DialogsPropsType = {
//     dispatch: (action: ActionType) => void
//     state: {
//         messagesData: Array<MessagePropsType>
//         dialogsData: Array<DialogItemPropsType>
//         newMessage: string
//     }
// }

type DialogsContainerProps = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerProps) => {

    const state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(addMessageCreateAction())
    }
    const onChangeHandler = (text: string) => {
            props.store.dispatch(updateNewMessageTextCreateAction(text))
    }
    return (
        <Dialogs state={state.dialogsPage}
                 sendMessage={sendMessage}
                 onChangeHandler={onChangeHandler}
        />
    )
}

export default DialogsContainer;