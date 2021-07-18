/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.scss';
import { useRef, useEffect } from 'react';
import {TweenMax,Power3} from 'gsap';
const Menu = (props) => {

    let app = useRef(null);

    const menuAnimation = () => {
        return(
            props.toggle? 
            TweenMax.to(app,1,{opacity:1,y:-10,ease:Power3.easeOut}) 
            :
            TweenMax.to(app,1,{opacity:0,y:10,ease:Power3.easeOut})
        );  
    }
    
    useEffect(() => {
        menuAnimation()
    });

    return(
        <div className="Menu" ref={el => app = el} style={props.toggle? {"display":"block"}:{"display":"none"}} >
            <ul>
                <li className = "Menu--element">
                    <a className="quit" onClick={()=>props.togglefunction(false)}>x</a>
                </li>
                <li className = "Menu--element">    
                   <a href="#" className="active">Home</a>
                </li>
                <li className = "Menu--element">
                    <a href="#">Contact</a>
                </li >
                <li className = "Menu--element">
                    <a href="#">AboutUs</a>
                </li>
                <li className = "Menu--element">
                    <a href="#">Other</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;