import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom'
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'


let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "localhost:5000"


    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT,{
            cors: {
                origin: "localhost:5000",
                methods: ["GET", "POST"],
            }
            })
        setRoom(room);
        setName(name);


        socket.emit('join', { name, room }, () => {
        });

        return () => {
            socket.emit('disconnect');

            socket.off();

        }
    }, [ENDPOINT, location.search]);
    

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    },[messages]);

// function to send msgs
    
    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage('')
            );
        }
    }
    console.log(message, messages);

    return (
        <div className="outerContainer">
        <div className="container">
                <InfoBar room={room}/>
            {/* <Messages messages={messages} name={name} /> */}
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            
                
        </div>
        {/* <TextContainer users={users}/> */}
      </div>
    )
};

export default Chat;