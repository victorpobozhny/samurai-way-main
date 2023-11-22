import React from 'react'
import s from './Footer.module.css'
import logo from '../../images/logo_black_transparent.png'


const Footer = () => {
    return (
        <div className={s.footer}>

            <div className={s.footerInfo}>2023.</div>
            <img src={logo} className={s.footerImage}/>
        </div>

    )
}

export default Footer;