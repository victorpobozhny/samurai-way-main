import React from 'react'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const sendMessage = () => {
                    store!.dispatch(addMessageAC())
                }
                const onChangeHandler = (text: string) => {
                    store!.dispatch(updateNewMessageTextAC(text))
                }
                return (
                    <Dialogs state={store!.getState().dialogsPage}
                             sendMessage={sendMessage}
                             onChangeHandler={onChangeHandler}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;