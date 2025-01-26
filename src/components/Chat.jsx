import React, { useEffect, useRef, useState } from 'react'
import {db} from '../services/firebase'
import { collection, addDoc,getDocs,doc, onSnapshot,query,orderBy } from "firebase/firestore"; 
import { useParams } from 'react-router-dom';
import { Filter } from 'bad-words'
import { v4 as uuid } from 'uuid'


const Chat = () => {
    const [inputText,setInputText]=useState('')
    const [message,setMessage]=useState('')
    const[messages,setMessages]=useState([])
    const hasFetchedRef = useRef(false);

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
                console.log("Document written with ID: ", docRef.id);
                
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        addToDb()

        // const fetchDbData=async()=>{
        //     // if(hasFetchedRef.current)return
        //     const messagesArray=[]
        //      const querySnapshot = await getDocs(collection(db, "articles", params.id, "messages"));
        //      //if there are no messages in the collection, return
        //     if(querySnapshot.size===0)return
        //     //if there are messages push each message into the messages array
        //     querySnapshot.forEach((doc) => {
        //         messagesArray.push(doc.data())
        //     //   console.log(doc.data());
        //     });
        //     setMessages(messagesArray)
        //     // hasFetchedRef.current = true; 
        //     }
        //     fetchDbData()

            const q = query(
                collection(db, "articles", params.id, "messages"),
                orderBy('timestamp') // Assuming you have a 'timestamp' field in your messages to order them
              );

              const unsub = onSnapshot(q, (querySnapshot) => {
                const messagesArray = [];
                querySnapshot.forEach((doc) => {
                  messagesArray.push(doc.data());
                console.log(doc.data())
                });
                setMessages(messagesArray); // Update state with the latest messages
              });


    },[message])

    useEffect(()=>{

    },[messages])

  


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
                <p key={idx}>{msg.message} {msg.timestamp} {msg.author.slice(0,12)}</p>
            ))}
        </div>
    </div>
  )
}

export default Chat