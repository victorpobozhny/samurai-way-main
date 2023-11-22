import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemPropsType) {
    let path = 'dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
    id: number
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


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

    const dialogs = dialogsData.map(el=> {
        return <DialogItem name={el.name} id={el.id} />
    })

    const messages = messagesData.map(el=> {
        return <Message message={el.message} id={el.id} />
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
                {/*<DialogItem name={"Victor"} id={1}/>*/}
                {/*<DialogItem name={"Andrew"} id={2}/>*/}
                {/*<DialogItem name={"Nickolas"} id={3}/>*/}
                {/*<DialogItem name={"Amanda"} id={4}/>*/}
                {/*<DialogItem name={"Anastasia"} id={5}/>*/}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;