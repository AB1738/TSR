import React, { useEffect, useRef, useState } from 'react'
import {db} from '../services/firebase'
import { collection, addDoc,getDocs } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';

const Chat = () => {
    const [inputText,setInputText]=useState('')
    const [message,setMessage]=useState('')
    const[messages,setMessages]=useState([])
    const hasFetchedRef = useRef(false);
    let params = useParams()
    console.log(params.id)
    //Whenever message changes add the message to the db
    useEffect(()=>{
        const addToDb=async()=>{
            try {
                if(message.length===0)return
                const docRef = await addDoc(collection(db, "articles", params.id, "messages"), {
                  message: message,
                  timestamp: new Date().toLocaleString(),
                });
                console.log("Document written with ID: ", docRef.id);
                
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        addToDb()
    },[message])

    useEffect(()=>{
        const fetchDbData=async()=>{
            // if(hasFetchedRef.current)return
            const messagesArray=[]
             const querySnapshot = await getDocs(collection(db, "articles", params.id, "messages"));
            if(querySnapshot.size===0)return
            querySnapshot.forEach((doc) => {
                messagesArray.push(doc.data())
              console.log(doc.data());
            });
            setMessages(messagesArray)
            // hasFetchedRef.current = true; 
            }
            fetchDbData()
    },[message])



const handleSubmit=(e)=>{
    e.preventDefault()
    //Set the message when the form is submitted
    setMessage(inputText)
    setInputText('')
}


  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <button type='submit'>Send Message</button>
        </form>
        <div className="message-container">
            {messages.map((msg,idx)=>(
                <p key={idx}>{msg.message}</p>
            ))}
        </div>
    </div>
  )
}

export default Chat