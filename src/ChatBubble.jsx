import React from "react";
import "./ChatBubble.css"; // optional

const ChatBubble = ({ text, sender }) => {
  return (
    <div className={`bubble ${sender === "user" ? "user" : "bot"}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;
