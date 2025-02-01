import React, { useEffect, useRef, useState } from 'react'
import {db} from '../services/firebase'
import { collection, addDoc,getDocs,doc, onSnapshot,query,orderBy } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';
import { Filter } from 'bad-words'
import { v4 as uuid } from 'uuid'
import Message from './Message';
import ChatBox from './ChatBox';
import '../css/Chat.css'


const Chat = () => {
    const [inputText,setInputText]=useState('')
    const [message,setMessage]=useState('')
    const[messages,setMessages]=useState([])
    const messageRef = useRef();




    //grab the id for the article so that messages can be linked to that specific article
    let params = useParams()

    //npm package for filtering bad words 
    const filter = new Filter();


    //Whenever message changes add the message to the db and fetch all messages from the db related to that article, if they exist
    useEffect(()=>{
        if(localStorage.getItem('id')){
            console.log('we in here boyyyyy')
            console.log(localStorage.getItem('id'))
        }
        else{
            localStorage.setItem('id',uuid())
    
        }
        const addToDb=async()=>{
            try {
                if(message.length===0)return
                //if message contains slurs,curse words etcfilter the message when adding to db using npm bad-words package
                const docRef = await addDoc(collection(db, "articles", params.id, "messages"), {
                  message: filter.clean(message),
                  timestamp: new Date().toLocaleString(),
                  author:`anon-${localStorage.getItem('id')}`
                });
                // console.log("Document written with ID: ", docRef.id);
                
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        addToDb()
        // Create a query to retrieve the messages collection of a specific article
            const q = query(
                collection(db, "articles", params.id, "messages"),
                orderBy('timestamp') // Ordering by the timestamo field
              );

              // Set up a real-time listener for the query using onSnapshot
              const unsub = onSnapshot(q, (querySnapshot) => {
                const messagesArray = [];  //empty array to hold all the messages after looping through them
                querySnapshot.forEach((doc) => {
                  messagesArray.push(doc.data());
                console.log(doc.data())
                });
                setMessages(messagesArray); // Update state with the latest messages
              });


    },[message])

    //When the messages array changes(new message was sent), scroll to the bottom to display the new message
    useEffect(()=>{
        messageRef.current.scrollIntoView({
            block:'end',
            behavior:'smooth',
        })
    },[messages])

  


const handleSubmit=(e)=>{
    e.preventDefault()
    //Set the message when the form is submitted
    setMessage(inputText)
    setInputText('')
}

  return (
    <div className='chat'>
        {(messages.length>0)?(
                   <div className="message-container">
                   {messages.map((msg,idx)=>(
                       <Message key={idx} msg={msg}/>
                   ))}
               <div ref={messageRef}>
       
               </div>
               </div>
        ):(<>
            <h1 className='no-msg-found-header'>Looks like no one has weighed in on this yet. Share your thoughts!</h1>
            <div ref={messageRef}>
                </div>
                </>

        )}
 
        <ChatBox inputText={inputText} setInputText={setInputText} handleSubmit={handleSubmit}/>

    </div>
  )
}

export default Chat