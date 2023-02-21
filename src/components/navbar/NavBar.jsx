import React, { useEffect, useState } from 'react';

import img from "../../assets/coding.png"

import './Navbar.css';

const BasicExample = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [menu_class, setMenuClass] = useState("links hidden")
  const [open, setopen] = useState("openIcon open")
  const [scrollEffect, setscrollEffect] = useState(false)

  useEffect(() => {
const Changebg=()=>{  
    const COLOR_CHANGE_THRESHOLD = 90;

  if(window.scrollY >= COLOR_CHANGE_THRESHOLD && scrollEffect !== true){
   setscrollEffect(true)
       }
  if(window.scrollY < COLOR_CHANGE_THRESHOLD && scrollEffect !== false){
   setscrollEffect(false)
       }}        
       
       window.addEventListener("scroll",Changebg )
}, )
  
  const updateMenu = () => {
    if(!isMenuClicked) {
        setMenuClass("links visible")
        setopen("openIcon close")
    
    }
    else {
        setMenuClass("links hidden")
        setopen("openIcon open")
    }
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <nav  className={scrollEffect?"app__navbar scroll" : "app__navbar"}>
      <div className="app__navbar-logo">  
     <img src={img}/>
     <h1 className={"app__navbar-title"}>BILLAL TADJINE</h1>
      </div>
      <button onClick={updateMenu} className={open} >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
      <ul className={menu_class}>
        <li  className="p__opensans"><a onClick={updateMenu} href="#Home" >Home</a></li>
        <li className="p__opensans"><a onClick={updateMenu} href="#About">About</a></li>
        <li className="p__opensans"><a onClick={updateMenu} href="#Projects">Projects</a></li>
        <li className="p__opensans"><a onClick={updateMenu} href="#Contact">Contact</a></li>
      </ul>
        
    
    </nav>
  );
};

export default BasicExample;