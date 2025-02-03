
import React, { useState } from 'react';
import './Menu.css'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='container'>
            <nav className='navigation'>
                <div className='hamburguer' onClick={toggleMenu}>
                    <span className={menuOpen ? "line open" : "line"}></span>
                    <span className={menuOpen ? "line open" : "line"}></span>
                    <span className={menuOpen ? "line open" : "line"}></span>
                </div>
                <ul className={menuOpen ? "menu open" : "menu"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Habilidades</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Menu;