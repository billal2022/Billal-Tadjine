import React, { useState } from 'react';

import img from "../../assets/coding.png"

import './Navbar.css';

const BasicExample = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [menu_class, setMenuClass] = useState("app__navbar hidden")
  const [open, setopen] = useState("openIcon open")
  
  const updateMenu = () => {
    if(!isMenuClicked) {
        setMenuClass("app__navbar visible")
        setopen("openIcon close")
    
    }
    else {
        setMenuClass("app__navbar hidden")
        setopen("openIcon open")
    }
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <nav className={menu_class} >
      <div className="app__navbar-logo">  
     <img src={img}/>
     <h1 className={"app__navbar-title"}>BILLAL TADJINE</h1>
      </div>
      <button onClick={updateMenu} class={open} type="button" >
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
        </button>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#Home">Home</a></li>
        <li className="p__opensans"><a href="#About">About</a></li>
        <li className="p__opensans"><a href="#Projects">Projects</a></li>
        <li className="p__opensans"><a href="#Contact">Contact</a></li>
      </ul>
        
    
    </nav>
  );
};

export default BasicExample;