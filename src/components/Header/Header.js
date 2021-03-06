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
                <svg height="480pt" viewBox="0 0 480 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m472 112h-120v-104c0-4.417969-3.582031-8-8-8h-336c-4.417969 0-8 3.582031-8 8v400c.0429688 39.746094 32.253906 71.957031 72 72h336c39.746094-.042969 71.957031-32.253906 72-72v-288c0-4.417969-3.582031-8-8-8zm-109.207031 352h-290.792969c-30.914062-.035156-55.964844-25.085938-56-56v-392h320v392c.007812 2.636719.160156 5.269531.457031 7.886719.085938.855469.261719 1.679687.382813 2.527343.257812 1.730469.519531 3.441407.894531 5.121094.21875.976563.488281 1.921875.746094 2.878906.398437 1.523438.800781 3.027344 1.320312 4.496094.328125.976563.695313 1.9375 1.0625 2.898438.535157 1.40625 1.121094 2.796875 1.761719 4.167968.421875.933594.863281 1.855469 1.328125 2.757813.695313 1.363281 1.445313 2.671875 2.222656 4 .503907.851563 1 1.707031 1.535157 2.53125.882812 1.34375 1.832031 2.636719 2.800781 3.925781.527343.695313 1.023437 1.425782 1.601562 2.105469 1.277344 1.597656 2.648438 3.085937 4.054688 4.550781.3125.320313.585937.671875.894531.984375 1.742188 1.742188 3.574219 3.394531 5.480469 4.953125.074219.046875.152343.144532.25.214844zm101.207031-56c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56v-280h112zm0 0"/><path d="m296 64h-240c-4.417969 0-8 3.582031-8 8v80c0 4.417969 3.582031 8 8 8h240c4.417969 0 8-3.582031 8-8v-80c0-4.417969-3.582031-8-8-8zm-8 80h-224v-64h224zm0 0"/><path d="m296 208h-240c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h240c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/><path d="m296 256h-240c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h240c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/><path d="m296 304h-240c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h240c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0"/></svg>
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
                    <Menu toggle={menu} togglefunction={setMenu} nav={props.nav} setNav={props.setNav}/>
                </div>
                
                
            </div>
            
        </header>
    );
}

export default Header;