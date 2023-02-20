import "./Button.css"

export default function Button({Button,href}) {
  return (
   <a targrt="_blank"className="btn" href={href}><button>{Button}</button></a>
  )
}
