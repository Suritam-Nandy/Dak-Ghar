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
        socket = io(ENDPOINT,{
            
            })
        setRoom(room);
        setName(name);


        socket.emit('join', { name, room }, ({error}) => {
            alert()
        });

    }, [ENDPOINT,location.search ]);
    return (
        <h1>chat agaya</h1>
    )
};

export default Chat;