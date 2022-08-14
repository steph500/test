import React, {useState} from 'react'

export default function Name() {
    var chat = [
        {
            messageId: 1,
            message: "Hello"
        }
    ];

    const [chats, setChats] = useState([
        { name: "John", chats: chat },
    ])

    const findName = (event)=>{
        // get the name of the user
        const name = document.getElementById("name").value;
        console.log(name);
        console.log(chats);
        // find the users chat in the chats array
        const user = chats.find(user => user.name === name);

        if(user){
            // if the user is found, set the chats to the user's chats
            setChats(user.chats);
        } else {
            //display error message
            alert("User not found");
        }
        
        console.log(user);
    };




    return (
        <>
            <div>
                <h1>Name</h1>
                <input type="text" id="name"/>
                <button onClick={findName}>Submit</button>
            </div>
        </>
    )
}
