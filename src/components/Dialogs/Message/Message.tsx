import s from "../Dialogs.module.css";
import React from "react";

export type MessagePropsType = {
    message: string
    id: number
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}