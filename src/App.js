import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function App() {
  // state -> short term memory to track what we are typing inside input
  const [input, setInput] = useState('')         // setup input field
  const [messages, setMessages] = useState([])   // empty array to store messages
  const [username, setUsername] = useState('')   // username of the person
  
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    // const username = prompt('Enter your name')
    setUsername(prompt('Please enter your name...'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput('');
    // setMessages([...messages, input]);     // keep all the current messages and append the input to the end
    //setMessages([...messages, {username: username, message: input}])   // update above lines of code
  }

  return (
    <div className="app">

      <img className="app__image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a message...</InputLabel> */}
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" type="submit" onClick={sendMessage} variant="contained" color="primary" disabled={!input}>
            <SendRoundedIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            /* message component....grab message, pass it through Message.js, style it, output it */
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;