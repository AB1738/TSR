import React from 'react'
import '../css/ChatBox.css'
import { FaCircleChevronUp } from "react-icons/fa6";



const ChatBox = ({inputText,setInputText,handleSubmit}) => {
  return (
 <div className="chatbox">
    <form onSubmit={(e)=>handleSubmit(e)} className='chat-form'>
    <input className='chat-input'type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder='What’s your take on this latest update?'/>
    <button  className='chat-btn' type='submit'>
        <FaCircleChevronUp className='btn-icon'/>
  </button>
</form>
</div>
  )
}

export default ChatBox