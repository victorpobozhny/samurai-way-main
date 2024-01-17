import React from 'react'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import store from "../../redux/redux-store";
import {AppStateType} from "../../App";

// функции для настройки connect
let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
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
