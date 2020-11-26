import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom'
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    // const [users, setUsers] = useState('');
    // const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState([]);
    const ENDPOINT = "localhost:5000"


    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log(name, room);
        console.log(io);
        socket = io(ENDPOINT,{
            
            })
        console.log(socket);
        setRoom(room);
        setName(name)
    });
    return (
        <h1>chat agaya</h1>
    )
};

export default Chat;