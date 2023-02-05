import "./Button.css"

export default function Button({Button,href}) {
  return (
   <a targrt="_blank" href={href}><button>{Button}</button></a>
  )
}
