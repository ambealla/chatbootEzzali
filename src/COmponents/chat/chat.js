import React, { Component, useState } from 'react'
import { PulseLoader } from 'react-spinners';
import './chat.scss'

export default function ChatBot() {
    const [messages, setMessageList] = useState([]);
    const [valueee, setvalueee] = useState("");
    const [open, isOpen] = useState(false);
    const [loading, isloading] = useState(false);
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
        isloading(true)
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

                let data = r.answer
                let output = r.answer.map(e => e.split('","'))
                
                console.log(output.length)
                /* .map(f => {
                    
                        setTimeout(function () {
                            var msg2 = { name: "ENSIAS", message: f };

                            setMessageList(messages => [...messages, msg2]);
                            isloading(false)
                        }, 3000)
                    }
                    
                ) */

                for(let i=0;i<output.length;i++,isloading(true)){
                    
                    setTimeout(function () {
                        var msg2 = { name: "ENSIAS", message: output[i] };

                        setMessageList(messages => [...messages, msg2]);
                         
                         if(i===output.length-1){isloading(false)}
                
                    }, 3000 +(i*3)*1000)

                }
            
                
                console.log(messages)
                setvalueee("")
            }).catch ((error) => {
                isloading(false)
        console.error('Error:', error);
    });
}

const listItems = messages.map((item, index) => {
    if (item.name === "ENSIAS") {
        
      return   (
      
      <div>
       <div className="messages__item messages__item--visitor" key={index}>{item.message} </div></div> );
    }
    else {
        return <div className="messages__item messages__item--operator" key={index}> {item.message}</div>
    }
}
);


return (
    <div>
        {
            open ? <div className="chatbox__support chatbox">
                <div className="chatbox__header">
                    <div className="chatbox__image--header">
                        <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
                    </div>
                    <div className="chatbox__content--header">
                        <h4 className="chatbox__heading--header">2SCL Chat support</h4>
                        <p className="chatbox__description--header">Bonjour. je m'appel ENSIAS. comment je peux vous aider?</p>
                    </div>
                </div>
                <div className="chatbox__messages">
                    <div>
                        <ul>{listItems}
                        <PulseLoader color="#ff4343" loading={loading}  size={5}/>
                        </ul>
                    </div>
                </div>

                <form className="chatbox__footer" onSubmit={onSendButton}>
                    <input id='valuee' type="text" value={valueee} onChange={(e) => setvalueee(e.target.value)} placeholder="ecrire un  message..." />
                    <button className="chatbox__send--footer send__button" onSubmit={onSendButton}>envoyer</button>
                </form>
            </div> : <div></div>
        }

        <div className="chatbox__button floating">
            <button onClick={() => isOpen(!open)}>
                <img className='radi' src="/Background.svg" />
            </button>
        </div>
    </div>
);

};

