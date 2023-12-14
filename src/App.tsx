import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {PostType} from "./components/Profile/MyPosts/MyPosts";
import {FriendType} from "./components/Sidebar/Friend/Friend";
import {ActionType} from "./redux/state";


export type AppPropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
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
    friends: Array<FriendType>
}

function App(props: AppPropsType) {

    const DialogsComponent = () => {
        return <Dialogs
            state={props.state.dialogsPage}
            dispatch={props.dispatch}
        />
    }

    const ProfileComponent = () => {
        return <Profile
            state={props.state.profilePage}
            dispatch={props.dispatch}

        />
    }

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>


            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={ProfileComponent}/>
                <Route path='/dialogs' render={DialogsComponent}/>
            </div>


            <Sidebar friends={props.state.friends}/>
            <Footer/>
        </div>

    );
}

export default App;
