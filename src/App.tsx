import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Profile/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
