import React from 'react';
import cl from './navbar.module.css'

const NavBar = () => {
    return (
        <nav>
            <img src='assets/Logo.svg'/>
            <div className={cl.navMiddle}>
                <a href="">Shop</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className={cl.navRight}>
                <a href="">Login</a>
                <a href="">Sign Up</a>
                <a className={cl.cart} href=""><img src='assets/cart.svg'/></a>
            </div>
        </nav>
    );
};


export default NavBar;
