import React from 'react'
import s from './Footer.module.css'
import logo from '../../images/logo_black_transparent.png'
import incubator from './../../images/incubator.svg'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerInfo}>2023</div>
            <img src={logo} className={s.footerImage} alt={'Header Logo'}/>
            <div className={s.incubator}>
                <a href={'https://it-incubator.io/'}
                   target="_blank">
                    <img src={incubator} alt={'IT-INCUBATOR'} />
                </a>
            </div>
        </div>

    )
}

export default Footer;