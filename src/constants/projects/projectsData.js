
import "./projectsData.css"
import {MdArrowForwardIos} from "react-icons/md";
import{ Data }from"../data.js/data"


export default function projectsData() {
  return (
 <>
 {Data.map((b, i) => {
           
      return(
        <div className="Pdata__container" key={i}>
                       
             <img src={b.image} alt="" />           
         <div className="Pdata__container-child">
         <h1 className="Pdata__container-title">{b.title}</h1>
             <p className="Pdata__container-disc">{b.description}</p>
             <div className="Pdata__container-skills">
             {b.tags.map((t, i) => {
                return <div className="Pdata__container-skills-childs" key={i}>{t}</div>;
              })}
             </div>
             <div className="Pdata__container-btns">
            <a className='noselect' href={b.visit} target="_blank"><button>Code</button></a>
            <a className='noselect' href={b.source} target="_blank"><button className="btntwo">Source<MdArrowForwardIos /></button></a>
          </div>
         </div>
        </div>
      )
            
    })}
 </>
 
  )
}
