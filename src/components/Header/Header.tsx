import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../images/png/logo1.png'
import s from './Header.module.css'

type HeaderProps = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderProps) => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;