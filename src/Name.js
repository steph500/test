import React, { useState } from 'react'

export default function Name() {
    var chat = [
        {
            messageId: 1 ,
            message: "Hello"
        }
    ];
    
    const user = {
        name: "John Doe",
        chats: chat
    }

    const addDummyData = () => {
        // store dummy data in local storage
        localStorage.setItem("dummy", JSON.stringify(user));
    }

    // const [chats, setChats] = useState([
    //     { name: "John", chats: chat },
    // ])

    const findName = () => {
        // get the name of the user
        const name = document.getElementById("name").value;

        //get the user from local storage
        const user = JSON.parse(localStorage.getItem(name));

        // find the users chat in the chats array
        // const user = chats.find(user => user.name === name);

        if (user) {
            chat = user.chats;
        } else {
            //display error message
            alert("User not found");
        }

        console.log(user);
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
