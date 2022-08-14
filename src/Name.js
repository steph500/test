import React, { useState } from 'react'

export default function Name() {
    var chat = [
        {
            messageId: 1 ,
            message: "Hello",
            user: "John"
        },
        {
            messageId: 2 ,
            message: "Hello 2",
            user: "John"
        },
        {
            messageId: 3 ,
            message: "Hello 3",
            user: "David"
        }
    ];

    // get chats from local storage
    // const chat = localStorage.getItem("chats");
    
    const user = {
        name: "dummy",
        messageIds: [1, 3],
        // chats: chat
    }

    const addDummyData = () => {
        // store dummy data in local storage
        localStorage.setItem("dummy", JSON.stringify(user));

        //add chat dummy data to local storage
        localStorage.setItem("chat", JSON.stringify(chat));
    }

    // const [chats, setChats] = useState([
    //     { name: "John", chats: chat },
    // ])

    const findName = () => {
        // get the name of the user
        const name = document.getElementById("name").value;

        

        //get the user from local storage
        const user = JSON.parse(localStorage.getItem(name));

        console.log(user);

        // find the users chat in the chats array
        // const user = chats.find(user => user.name === name);

        if (user.name == name) {
            //get users messages using the messageIds array
            chat = user.messageIds.map(messageId => {
                return chat.find(message => message.messageId === messageId)
            }).filter(message => message !== undefined);

            // chat = user.chats;
        } else {
            //display error message
            alert("User chats not found");
        }

        console.log(chat);
    };
    
    //save the message to the chat array
    const saveMessage = () => {

        // get the message from the input field
        const message = document.getElementById("message").value;

        // add the message to the chat array
        chat.push({ messageId: chat.length + 1, message: message });

        //save user to local storage
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <>
            <div>
            <button onClick={addDummyData}>Add Dummy Data</button>
            </div>

            <div>
                <h1>Name</h1>
                <input type="text" id="name" />
                <button onClick={findName}>Submit</button>
            </div>
            <div>
                <h1>Chats</h1>
                {chat.map(chat =>

                    <div key={chat.messageId}>
                        {chat.message}
                    </div>)} 
                    
            </div>
            <div>
                <h1>Messages</h1>
                <input type="text" id="message" />
                <button onClick={saveMessage}>Save Message</button>
            </div>
        </>
    )
}
