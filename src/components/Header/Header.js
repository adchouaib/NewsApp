/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';
const Header = (props) => {
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
                <button className="header-menu-button">Menu</button>
            </div>
            
        </header>
    );
}

export default Header;