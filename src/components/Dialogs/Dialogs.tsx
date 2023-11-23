import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";


type DialogsPropsType = {
    state: {
        messagesData: Array<MessagePropsType>
        dialogsData: Array<DialogItemPropsType>
    }
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogsData.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    const messagesElements = props.state.messagesData.map(el => {
        return <Message message={el.message} id={el.id}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;