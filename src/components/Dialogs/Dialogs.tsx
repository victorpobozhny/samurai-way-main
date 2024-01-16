import React, {useRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    onChangeHandler: (text: string) => void
    sendMessage: () => void
    state: StateType
}

type StateType = {
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    newMessage: string
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogsData.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    const messagesElements = props.state.messagesData.map(el => {
        return <Message message={el.message} id={el.id}/>
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
                        value={props.state.newMessage}
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