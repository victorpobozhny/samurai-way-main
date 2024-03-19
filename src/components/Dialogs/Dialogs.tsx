import React, {useRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
    onChangeHandler: (text: string) => void
    sendMessage: () => void
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    newMessage: string
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsData.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })

    const messagesElements = props.messagesData.map(el => {
        return <Message key={el.id} message={el.message} id={el.id}/>
    })

    let newMessageRef = useRef<HTMLTextAreaElement | null>(null)

    const onSendMessageClickButton = () => {
        props.sendMessage()
    }
    const onChangeHandler = () => {
        if (newMessageRef.current?.value) {
            props.onChangeHandler(newMessageRef.current.value)
        }
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageRef}
                        value={props.newMessage}
                        placeholder={'write'}
                        onChange={onChangeHandler}
                    />
                    <button onClick={onSendMessageClickButton}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;