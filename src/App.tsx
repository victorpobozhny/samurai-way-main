import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <MyPosts/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
