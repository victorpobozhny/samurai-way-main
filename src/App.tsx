import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {PostType} from "./components/Profile/MyPosts/MyPosts";
import {EmptyObject, Store} from "redux";
import dialogsReducer from "./redux/dialogs-reducer";
import profileReducer from "./redux/profile-reducer";
import {ActionType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type StoreType = Store<EmptyObject & { dialogsPage: dialogsReducer; profilePage: profileReducer; }, ActionType>;

export type AppPropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
    store: StoreType
}

export type AppStateType = {
    dialogsPage: {
        messagesData: Array<MessagePropsType>
        dialogsData: Array<DialogItemPropsType>
        newMessage: string
    }
    profilePage: {
        postsData: Array<PostType>
        newPostText: string
    }
}

function App() {

    const DialogsComponent = () => {
        return <DialogsContainer/>
    }

    const ProfileComponent = () => {
        return <Profile/>
    }

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>


            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={ProfileComponent}/>
                <Route path='/dialogs' render={DialogsComponent}/>
            </div>
            <Sidebar/>
            <Footer/>
        </div>

    );
}

export default App;
