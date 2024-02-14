import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from 'react-router-dom'

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/MyPosts/ProfileContainer";

function App() {

    const DialogsComponent = () => {
        return <DialogsContainer/>
    }

    const ProfileComponent = () => {
        return <ProfileContainer/>
    }

    const UsersComponent = () => {
        return <UsersContainer/>
    }

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={ProfileComponent}/>
                <Route path='/dialogs' render={DialogsComponent}/>
                <Route path='/users' render={UsersComponent}/>
            </div>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
