import React from 'react';
import { FaHamburger } from "react-icons/fa"
import { AiOutlineClose } from 'react-icons/ai';
import img from "../../assets/coding.png"

import './Navbar.css';

const BasicExample = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
     <img src={img}/>
     <h1 className={"app__navbar-title"}>BILLAL TADJINE</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#Home">Home</a></li>
        <li className="p__opensans"><a href="#About">About</a></li>
        <li className="p__opensans"><a href="#Projects">Projects</a></li>
        <li className="p__opensans"><a href="#Contact">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <FaHamburger color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#Home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#About" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#Projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li><a href="#Contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BasicExample;