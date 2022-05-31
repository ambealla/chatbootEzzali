import React, { Component, useState } from 'react'
import './chat.css'

export default function Do() {
    const [messages, setMessageList] = useState([]);
    const [valueee, setvalueee] = useState("");
    const [open, isOpen] = useState(false);

    function handleSubmit(e, value) {
        e.preventDefault();
        const msg1 = { name: "User", message: value }
        console.log(msg1);
        setMessageList(messages => [...messages, msg1]);
        console.log(messages)

    }
    function onSendButton(e) {
        e.preventDefault();
        const text1 = valueee
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        setMessageList(messages => [...messages, msg1]);
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                var msg2 = { name: "ENSIAS", message: r.answer };
                
                setMessageList(messages => [...messages, msg2]);
                console.log(messages)
                setvalueee("")
            }).catch((error) => {
                console.error('Error:', error);
            });
        }

    const listItems = messages.map((item, index) => {
        if (item.name === "ENSIAS") {
            return <div className="messages__item messages__item--visitor" key={index}>{item.message} </div>
        }
        else {
            return <div className="messages__item messages__item--operator" key={index}> {item.message}</div>
        }
    }
    );
    
    
    return (
        <div>
            {
                open ?<div className="chatbox__support chatbox">
                <div className="chatbox__header">
                    <div className="chatbox__image--header">
                        <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
                    </div>
                    <div className="chatbox__content--header">
                        <h4 className="chatbox__heading--header">2SCL Chat support</h4>
                        <p className="chatbox__description--header">Hi. My name is ENSIAS. How can I help you?</p>
                    </div>
                </div>
                <div className="chatbox__messages">
                    <div>
                        <ul>{listItems}</ul>
                    </div>
                </div>

                <form className="chatbox__footer" onSubmit={onSendButton}>
                    <input id='valuee' type="text" value={valueee} onChange={(e) => setvalueee(e.target.value)} placeholder="Write a message..." />
                    <button className="chatbox__send--footer send__button" onSubmit={onSendButton}>Send</button>
                </form>
            </div> : <div></div>
            }
            
            <div className="chatbox__button">
                <button onClick={()=>isOpen(!open)}>
                    <img src="/Background.svg" />
                </button>
            </div>
        </div>
    );

};

