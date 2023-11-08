import React from 'react'
import logo from './../images/logo.png'
import s from'../css/Header.module.css'



const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
        </header>
    )
}

export default Header;