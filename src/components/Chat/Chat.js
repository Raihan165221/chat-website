import React, { useRef, useState } from 'react';
import './Chat.css';
const Chat = () => {
    const [message, setMessage] = useState('');
    const myRef = useRef();

    const handleMessage = () => {
        setMessage(myRef.current.value);
    }
    return (
        <div className='chat-container'>
            <div className='my-text'>
                <p>{message}</p>
                <input ref={myRef} type="text" placeholder='Type a message' />
                <button onClick={handleMessage} className='my-btn'>Send</button>
            </div>
            <div className='another-text'>
                <input type="text" placeholder='Type a message' />
                <button onClick={handleMessage} className='another-btn'>Send</button>
            </div>
        </div>
    );
};

export default Chat;