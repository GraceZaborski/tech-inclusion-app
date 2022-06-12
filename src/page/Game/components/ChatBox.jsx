import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD-GFXIQz23fxxDYS2eMX_4zXlJOYL99d8",
  authDomain: "tech-inclusion-app.firebaseapp.com",
  projectId: "tech-inclusion-app",
  storageBucket: "tech-inclusion-app.appspot.com",
  messagingSenderId: "1076303821405",
  appId: "1:1076303821405:web:5bebc57d2f25e6acf86bb4",
  measurementId: "G-P3824C1G70",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const ChatBox = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messages);

  function ChatMessage(props) {
    // const {text, uid} = props.message;

    return <p>hiii</p>;
  }

  return (
    <div class="chatbox">
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100px",
        }}
      >
        <p style={{ paddingTop: "15px", paddingLeft: "5px", fontSize: "20px" }}>
          Hi there! My name is Emily. Please send me a message if you are having
          any trouble :)
        </p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "60px",
          marginTop: "70px",
        }}
      >
        <p style={{ paddingTop: "10px", paddingLeft: "5px", fontSize: "20px" }}>
          Hi Emily, is there a reason the clickable text is blu...
        </p>
      </div>
    </div>
  );
};

// <ChatMessage />
// <p>{messages}</p>
// <>
// <div>
//     {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
// </div>
// </>
