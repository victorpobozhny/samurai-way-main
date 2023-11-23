import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {PostType} from "./components/Profile/MyPosts/MyPosts";

type AppPropsType = {
    messagesData: Array<MessagePropsType>
    dialogsData: Array<DialogItemPropsType>
    postsData: Array<PostType>
}

function App(props: AppPropsType) {

    const DialogsComponent = () => {
        return <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>
    }

    const ProfileComponent = () => {
        return <Profile postsData={props.postsData}/>
    }

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
