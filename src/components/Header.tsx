import React from 'react'
import logo from './../images/logo.png'
import './../css/Header.css'



const Header = () => {
    return (
        <header className={'header'}>
            <img src={logo} alt={'logo'}/>
        </header>
    )
}

export default Header;