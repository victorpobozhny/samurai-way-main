import React, {useRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {ActionType} from "../../redux/store";
import {addMessageCreateAction, updateNewMessageTextCreateAction} from '../../redux/dialogs-reducer'
import {StoreType} from "../../App";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

// type DialogsPropsType = {
//     dispatch: (action: ActionType) => void
//     state: {
//         messagesData: Array<MessagePropsType>
//         dialogsData: Array<DialogItemPropsType>
//         newMessage: string
//     }
// }

// type DialogsContainerProps = {
//     store: StoreType
// }

const DialogsContainer = () => {

    // const state = props.store.getState()


    return (
        <StoreContext.Consumer>
            { (store)=>{
                const sendMessage = () => {
                     store!.dispatch(addMessageCreateAction())
                }
                const onChangeHandler = (text: string) => {
                    store!.dispatch(updateNewMessageTextCreateAction(text))
                }
                return (
                    <Dialogs state={store!.getState().dialogsPage}
                             sendMessage={sendMessage}
                             onChangeHandler={onChangeHandler}
                    />
                )
            }

        }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;