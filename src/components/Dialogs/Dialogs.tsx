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
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: string) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Victor"} id={1}/>
                <DialogItem name={"Andrew"} id={2}/>
                <DialogItem name={"Nickolas"} id={3}/>
                <DialogItem name={"Amanda"} id={4}/>
                <DialogItem name={"Anastasia"} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello, How are you'}/>
                <Message message={'Yooo'}/>
            </div>
        </div>
    )
}

export default Dialogs;