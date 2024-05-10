import React, { useState } from 'react';
import './Navigation.css'
import menu from './menu.gif'
import { Link } from'react-scroll';
import { LuMessageSquare } from "react-icons/lu";
const Navigation = () => {
   /* alert('This website is not fully responsive.Please use desktop for get better experience.') */

   const [showMenu, setShowMenu] =useState(false);
    return (

        <div>
           <nav className="navbar">
                <img src="/icon.svg" alt="" className='logo' />
                <div className="desktopMenu">
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className = "desktopMenuListItem">Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className = "desktopMenuListItem">About</Link>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className = "desktopMenuListItem">Portfolio</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className = "desktopMenuListItem">Clients</Link>
                </div>
                <button  className="desktopMenuBtn" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
                }}>
                 <LuMessageSquare style={{alignItems:'center',marginRight:'0.3rem',marginTop:'0.2rem'}}></LuMessageSquare>
                 Contact Me
                </button>
                <img src={menu} alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />
                <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className=  "listItem"onClick = {()=>setShowMenu(false)} >Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className=  "listItem"onClick = {()=>setShowMenu(false)} >About</Link>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className=   "listItem"onClick = {()=>setShowMenu(false)} >Portfolio</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className= "listItem"onClick = {()=>setShowMenu(false)} >Clients</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className= "listItem"onClick = {()=>setShowMenu(false)} >Contact</Link>
                </div>
           </nav>
        </div>
    );
};

export default Navigation;