import React from 'react';
import Image from 'next/image';
import logo from '../../assests/images/logo.png';
import style from './index.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.innerWrapper}>
                <a href="/" className={style.logo}>
                    Lasya Collections
                </a>
                <div className={style.headerRight}>
                    <a className="active" href="/">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="about-us">About</a>
                </div>
            </div>
        </div>
    )
}

export default Header; 