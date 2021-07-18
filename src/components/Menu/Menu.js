/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.scss';
import { useRef, useEffect } from 'react';
import {TweenMax,Power3} from 'gsap';
import { Link } from 'react-router-dom';
const Menu = (props) => {

    let app = useRef(null);

    const menuAnimation = () => {
        return(
            props.toggle? 
            TweenMax.to(app,.7,{opacity:1,y:-10,ease:Power3.easeOut}) 
            :
            TweenMax.to(app,.7,{opacity:0,y:10,ease:Power3.easeOut})
        );  
    }
    
    useEffect(() => {
        menuAnimation()
    });

    const toggle = (item) => {
        switch (item) {
            case "home":
                props.setNav({'home':true , 'all':false , 'contact':false , 'other':false});
                break;
            case "all":
                props.setNav({'home':false , 'all':true , 'contact':false , 'other':false});
                break;
            case "about":
                props.setNav({'home':false , 'all':false , 'contact':true , 'other':false})   
                break;
            case "other":
                props.setNav({'home':false , 'all':false , 'contact':false , 'other':true})
                break;
            default:
                break;
        }
        props.togglefunction(false);
    }

    return(
        <div className="Menu" ref={el => app = el} style={props.toggle? {"display":"block"}:{"display":"none"}} >
            <ul>
                <li className = "Menu--element">
                    <a className="quit" onClick={()=>props.togglefunction(false)}>x</a>
                </li>
                <li className = "Menu--element">    
                   <Link to="/" className={props.nav.home? "active":null } onClick={()=>toggle("home")}>Home</Link>
                </li>
                <li className = "Menu--element">
                    <Link to="/all" className={props.nav.all? "active":null } href="#" onClick={()=>toggle("all")}>All</Link>
                </li >
                <li className = "Menu--element">
                    <a href="#" className={props.nav.about? "active":null } onClick={()=>toggle("about")}>AboutUs</a>
                </li>
                <li className = "Menu--element">
                    <a href="#" className={props.nav.other? "active":null } onClick={()=>toggle("other")}>Other</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;