import "./About.css"
import Title from "../../constants/titles/Title"
import {AiFillHtml5,AiOutlineGithub} from 'react-icons/ai';
import {FaSearchengin,FaBootstrap} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {DiCss3,DiJavascript,DiReact,DiSass,DiGit,DiResponsive,DiTerminal} from 'react-icons/di';


import Icons from "../../constants/icons/Icons";

function About() {
  return (
    <section className="About__section" id="About">
    
   <div className="About__section-header">
   <Title Title="ABOUT ME" />
    <p className="About__section-sub">
      Here you will find more information
       about me, what I do, and my current skills
        mostly in terms of programming and technology</p>
        </div>
        <div className="About__section-content">
  <div className="About__section-main">
    <h1> 
      Learn about me!
    </h1>
    <p>
    Hello and welcome to my profile, I am a <strong>Front End Web Developer</strong> with a lot of experience in web design. if you are looking for an outstanding developer who can handle any task with honesty and professionalism then feel free to <a href="#Contact">contact me</a> anytime</p>
<p>    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="#Contact">contact me</a>.
</p>  

  </div>
    <div className="About__section-skills">
      <h1 className="About__section-skills-header"> My Skills</h1>
<div className="About__section-skills-skills">
<Icons icons={<AiFillHtml5 />} disc="HTML" />
<Icons icons={<DiCss3 />} disc="CSS" />
<Icons icons={<DiJavascript/>} disc="JavaScript" />
<Icons icons={<DiReact />} disc="React" />
<Icons icons={<DiSass />} disc="SASS" />
<Icons icons={<DiGit />} disc="Git" />
<Icons icons={<AiOutlineGithub />} disc="GitHub" />
<Icons icons={<DiResponsive />} disc="Responsive Design" />
<Icons icons={<FaSearchengin />} disc="SEO" />
<Icons icons={<DiTerminal />} disc="Terminal" />
<Icons icons={<FaBootstrap />} disc="Bootstrap" />
<Icons icons={<SiTailwindcss />}  style={{color:"green"}} disc="Tailwind" />
</div>
    </div>
        </div>
  
    </section>
  )
}

export default About