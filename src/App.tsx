import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from 'react-router-dom'
import Profile from "./components/Profile/Profile";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// export type StoreType = Store<EmptyObject & { dialogsPage: dialogsReducer; profilePage: profileReducer; }, ActionType>;
//
// export type AppPropsType = {
//     state: AppStateType
//     dispatch: (action: ActionType) => void
//     store: StoreType
// }
//
// export type AppStateType = {
//     dialogsPage: {
//         messagesData: Array<MessagePropsType>
//         dialogsData: Array<DialogItemPropsType>
//         newMessage: string
//     }
//     profilePage: {
//         postsData: Array<PostType>
//         newPostText: string
//     }
//     usersPage: UserType[]
// }

function App() {

    const DialogsComponent = () => {
        return <DialogsContainer/>
    }

    const ProfileComponent = () => {
        return <Profile/>
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
