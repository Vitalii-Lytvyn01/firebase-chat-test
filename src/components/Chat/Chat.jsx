import { useEffect, useState } from "react";
import {addDoc, collection,serverTimestamp,onSnapshot, query, where, orderBy} from 'firebase/firestore';
import "./Chat.scss";
import { db, auth } from "../../assets/firebase-config";
import classNames from "classnames";

export function Chat (props) {
  const {roomId} = props;
  const [newMessage,setNewMessage] = useState("");
  const [messages,setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef, 
      where("roomId","==", roomId),
      orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({...doc.data(),id: doc.id});
      })
      setMessages(messages);
    });

    return () => unsubscribe()
  },[]);

  
  async function handleSend() {
    if(newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      roomId
    });

    setNewMessage("");
  }


  return <div className="chat-container">
    <div className="messages-container">
      {messages.map((message) => (
        <div
          key={message.id}
          className={classNames("message", {self: message.user === auth.currentUser.displayName})}>
          <div className="message__text">
            {message.text}
          </div>
        </div>
      ))}
    </div>
    <div className="input-container">
      <input
        type="text"
        name="message-input"
        id="message-input" 
        className="text-box" 
        onChange={(e) => {setNewMessage(e.target.value)}}
        value={newMessage}
      />
      <div
        className="send-button"
        onClick={handleSend}
      >
        Send
      </div>
    </div>
  </div>
}