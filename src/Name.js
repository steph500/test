import React, { useState } from 'react'

export default function Name() {

    var user = "something";
    var userName = "something";
    var foundUser = false;

    // get items in local storage and store in chat array
    // var chat = JSON.parse(localStorage.getItem("chat"));

    // standing data for testing
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

    // get user from local storage
    // var user = localStorage.getItem("user");

    // standing data for users
    var userData =[ {
        userId: 1,
        userName: "John",
        activeState: false,
    } ];

    localStorage.setItem("chat", JSON.stringify(chat));


    const findName = () => {

        // get the name of the user
        const name = document.getElementById("name").value;

        // find if user with the name exists in the chat array
        user = chat.find(user => user.user === name);


        // if user exists, set the user to the found user
        if (user) {

            // get the selected user data from local storage
            userData = JSON.parse(localStorage.getItem("userData"));

            //get the selected user data from the user data array
            const selectedUser = userData.find(user => user.userName === name);

            // if user is active in another browser, show error message and exit function
            if (selectedUser.activeState) {
                alert("User is already active in another browser");
                return;
            } else {
                selectedUser.activeState = true;
            }

            userName = user.user
            foundUser = true;
            alert("selected user " + userName);
        } else {
            alert("User not found");
        }
    };
    
    //save the message to the chat array
    const saveMessage = () => {

        if (foundUser) {
        // get the message from the input field
        const message = document.getElementById("message").value;

        // add the message to the chat array
        chat.push({ messageId: chat.length + 1, message: message, user: user });

        //save user to local storage
        localStorage.setItem("chat", JSON.stringify(chat));

        alert("Message saved");
        } else {
            alert ("The user you entered does not exist, please select an existing user");
        }


        // var chat = JSON.parse(localStorage.getItem("chat"));
    }

    return (
        <>

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
