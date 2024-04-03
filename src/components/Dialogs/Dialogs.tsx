import { AddMessageForm, AddMessageFormProps } from "./AddMessageForm/AddMessageForm";
import { DialogItem, DialogItemPropsType } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { Message, MessagePropsType } from "./Message/Message";

export type DialogsPropsType = {
    onChangeHandler: (text: string) => void
    sendMessage: (message: string) => void
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    newMessage: string
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsData.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id} />
    })

    const messagesElements = props.messagesData.map(el => {
        return <Message key={el.id} message={el.message} id={el.id} />
    })





    const addNewMessage = (values: AddMessageFormProps) => {
        alert(values.newMessageBody)
        props.sendMessage(values.newMessageBody)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}


export default Dialogs;