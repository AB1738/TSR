import React from 'react'
import '../css/Message.css'
import { CgProfile } from "react-icons/cg";


const Message = ({msg}) => {

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