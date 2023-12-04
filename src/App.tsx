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

type AppPropsType = {
    state: AppStateType
    addPost: (postMessage: string)=>void
}

export type AppStateType = {
    dialogsPage: {
        messagesData: Array<MessagePropsType>
        dialogsData: Array<DialogItemPropsType>
    }
    profilePage: {
        postsData: Array<PostType>
    }
    friends: Array<FriendType>
}

function App(props: AppPropsType) {

    const DialogsComponent = () => {
        return <Dialogs state={props.state.dialogsPage}/>
    }

    const ProfileComponent = () => {
        return <Profile state={props.state.profilePage} addPost={props.addPost}/>
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
