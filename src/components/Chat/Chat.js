import React, { useRef, useState } from 'react';
import './Chat.css';
const Chat = () => {
    const [message, setMessage] = useState([]);
    const myRef = useRef();
    const anotherRef = useRef()
    const handleMessage = (event) => {
        const myText = myRef.current.value;
        const anotherText = anotherRef.current.value;
        myRef.current.value = '';
        anotherRef.current.value = '';
        setMessage([...message, {
            firstMessage: myText,
            secondMessage: anotherText
        }]);
    }
    return (
        <div className='chat-container'>
            <div className='my-text'>
                <div>
                    {
                        message.map(msg => <div>
                            <p className='first-message'>{msg.firstMessage}</p>
                            <p className='second-message'>{msg.secondMessage}</p>
                        </div>)
                    }
                </div>
                <input ref={myRef} type="text" placeholder='Type a message' />
                <button onClick={() => handleMessage(event)} className='my-btn'>Send</button>
            </div>
            <div className='another-text'>
                <input ref={anotherRef} type="text" placeholder='Type a message' />
                <button onClick={() => handleMessage(event)} className='another-btn'>Send</button>
            </div>
        </div>
    );
};

export default Chat;