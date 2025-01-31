import React from 'react'
import '../css/Message.css'
import { CgProfile } from "react-icons/cg";


const Message = ({msg}) => {
    const randomColor=()=>{
        return `rgb(${Math.floor((Math.random()*256)+1)},${Math.floor((Math.random()*256)+1)},${Math.floor((Math.random()*256)+1)})`
    }

  return (
    <div className='chat-message'>
        <div className="message-author">
        <CgProfile className='user-icon'/>
        <h6 className="author">{msg.author.slice(0,12)} </h6>
        </div>
        <p className='message-text'>
        {msg.message} 
        </p>
        <p className="message-time">
        {msg.timestamp}
        </p>
    </div>
  )
}

export default Message