import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addMessageAC} from '../../redux/dialogs-reducer';
import store, {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


// функции для настройки connect
let mapStateToProps = (state: AppRootStateType) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = () => {
    return {
        sendMessage: (newMessageBody: string) => {
            store!.dispatch(addMessageAC(newMessageBody))
        }
    }
}

//создаем контейнерную компоненту
const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
export default DialogsContainer;
