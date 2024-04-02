import { DialogItem, DialogItemPropsType } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { Message, MessagePropsType } from "./Message/Message";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

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



  

    const addNewMessage = (values: AddMessageForm) => {
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


type AddMessageForm = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter you message' />
                <div>
                    <button>Send Message</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageForm>({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;