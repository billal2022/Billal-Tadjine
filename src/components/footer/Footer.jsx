import  './Footer.css'
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { SiFrontendmentor } from 'react-icons/si';

export default function Footer() {
  return (
    <div className='Footer__main'>
<div className='Footer__main-container'>
    
    <div className='Footer__main-container-content-top'>
<div className='Footer__main-container-content-top-left'>
    <h2>BILLAL TADJINE</h2>
    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
    <h2 className='resume'>Resume link</h2>
    <p><a target={'_blank'} href="https://www.canva.com/design/DAFXpxhUIuc/E3sOvjhvZOXYFIRyHwXwBg/view?utm_content=DAFXpxhUIuc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" style={{color:"white"}}>https://www.canva.com/billal-tadjine resume</a></p>
</div>
<div className='Footer__main-container-content-top-right'>
    <span>SOCIAL</span>
    <div className='Footer__main-container-content-top-right-icons'>
    <a target={"_blank"} href='https://github.com/billal2022' title='Github link'><GoMarkGithub /></a>
    <a target={"_blank"} href='https://www.linkedin.com/in/billal-tadjine-ba314a24b/' title='LinkedIn link'> <BsLinkedin /></a>
    <a target={"_blank"} href='https://www.frontendmentor.io/profile/billal2022' title='Frontendmentor link'><SiFrontendmentor /></a>
    </div>
</div>
        </div>
    <div className='Footer__main-container-bot'>
        @ Copyright 
  
     2023. Made by <a href='#Home' target={'_blank'}>Billal Tadjine</a>
        </div>

        </div>
    </div>
  )
}
