import React,{useEffect, useState} from 'react'
import '../navbar.css'

import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Menu=()=>{
  return(
    <>
     <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whgpt3">contact us</a></p>
          <p><a href="#possibility">about us </a></p>
          <p><a href="#features">blog</a></p>
        
        </div></>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        
        </div>
       <Menu/>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">contact us</a></p>
            <p><a href="#possibility">about us</a></p>
            <p><a href="#features">blog</a></p>
          
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar