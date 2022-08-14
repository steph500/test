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

    var user = "something";

    // get chats from local storage
    // const chat = localStorage.getItem("chat");

    // const addDummyData = () => {
    //     // store dummy data in local storage
    //     localStorage.setItem("dummy", JSON.stringify(user));

    //     //add chat dummy data to local storage
    //     localStorage.setItem("chat", JSON.stringify(chat));
    // }

    const findName = () => {

        // get the name of the user
        const name = document.getElementById("name").value;

        //find if user with the name exists in the chat array
        const foundUser = chat.find(user => user.user === name);

        // if user exists, set the user to the found user
        if (foundUser) {
            user = foundUser.user;
        } else {
            alert("User not found");
        }

        //get the user from local storage
        // const user = JSON.parse(localStorage.getItem(name));
        console.log(name);
        console.log(foundUser);

        console.log(chat);
    };
    
    //save the message to the chat array
    const saveMessage = () => {

        // get the message from the input field
        const message = document.getElementById("message").value;

        // add the message to the chat array
        chat.push({ messageId: chat.length + 1, message: message, user: user });

        //save user to local storage
        localStorage.setItem("chat", JSON.stringify(chat));
    }

    return (
        <>
            <div>
            {/* <button onClick={addDummyData}>Add Dummy Data</button> */}
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
                        {chat.user} - {chat.message}
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
