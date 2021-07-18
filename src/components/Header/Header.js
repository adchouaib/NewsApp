/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
const Header = (props) => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return(
        <header className="header responsive-wrapper">

            <div className="header-left">
               <b>KeepTrack</b> 
            </div>

            <div className="header-middle">
                <a href="#" className="header-link">Call Us (+212) 666 666 666</a>
                <span>/</span>
                <a href="#" className="header-link">User@Gmail.com</a>
            </div>

            <div class="header-right">
                <nav class="header-nav">
                    <a href="#" class="header-link header-link--button">Login</a>
                </nav>
                <div classname="header-menu">
                    <button className="header-menu-button" onClick={toggleMenu}>Menu</button>
                    <Menu toggle={menu} togglefunction={setMenu}/>
                </div>
                
                
            </div>
            
        </header>
    );
}

export default Header;