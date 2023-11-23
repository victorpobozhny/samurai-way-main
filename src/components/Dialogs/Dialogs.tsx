import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


const dialogsData = [
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

const messagesData = [
    {message: 'Hi', id: 1},
    {message: 'Hello, How are you', id: 2},
    {message: 'Yo', id: 3},
    {message: 'Just do id', id: 4},
]

const Dialogs = (props: string) => {

    const dialogsElements = dialogsData.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    const messagesElements = messagesData.map(el => {
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