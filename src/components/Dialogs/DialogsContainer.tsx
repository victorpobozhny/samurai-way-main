import React from 'react'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import store, {AppRootStateType} from "../../redux/redux-store";


// функции для настройки connect
let mapStateToProps = (state: AppRootStateType) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = () => {
    return {
        sendMessage: () => {
            store!.dispatch(addMessageAC())
        },
        onChangeHandler: (text: string) => {
            store!.dispatch(updateNewMessageTextAC(text))
        }
    }
}

//создаем контейнерную компоненту
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
