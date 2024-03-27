import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from 'react-router-dom'

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

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
    const LoginComponent = () => {
        return <Login/>
    }

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile/:userId?' render={ProfileComponent}/>
                <Route path='/dialogs' render={DialogsComponent}/>
                <Route path='/users' render={UsersComponent}/>
                <Route path='/login' render={LoginComponent}/>
            </div>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
