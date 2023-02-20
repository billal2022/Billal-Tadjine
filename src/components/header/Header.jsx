import React from "react";
import "./Header.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import Animated_arrow from "../../constants/animated_arrow/animated_arrow";
import Button from "../../constants/button/Button";
import { Cursor, Typewriter } from 'react-simple-typewriter'

function Header() {
  return (
    <header id="Home">
      <section className="app__Header">
        <p className="title">
          HELLO I'M{"   "}
<span>          <Typewriter
            words={['BILLAL TADJINE', 'FRONTEND WEB DEVELOPER']}
            loop={Infinity}
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          /><span style={{color:"white"}}><Cursor cursorStyle="|" /></span></span>
          
        </p>

        <p className="app__Header-p">
          Welcome to my website! I am a front-end web developer who applies his
          skills in building websites.
        </p>
        <a href="#Projects">
          {" "}
          <Button Button="PROJECTS" href={"#Projects"} />
        </a>
      </section>
      <div className="app__Header-contact">
        <a
          target={"_blank"}
          href="https://github.com/billal2022"
          title="Github link">
          <GoMarkGithub />
        </a>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/billal-tadjine-ba314a24b/"
          title="LinkedIn link">
          {" "}
          <BsLinkedin />
        </a>
        <a
          target={"_blank"}
          href="https://www.frontendmentor.io/profile/billal2022"
          title="Frontendmentor link">
          <SiFrontendmentor />
        </a>
      </div>
      {/**arrow animated */}
      <Animated_arrow />
    </header>
  );
}

export default Header;
