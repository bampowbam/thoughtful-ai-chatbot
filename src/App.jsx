import React, { useState } from "react";
import { faqData } from "./data";
import ChatBubble from "./ChatBubble";
import "./App.css"; // optional if you want to add custom styles

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase().trim();

    // Check for greetings
    const greetings = ["hi", "hello", "hey", "greetings", "how are you", "hi there"];
    const isGreeting = greetings.some(
      (greet) => lowerQuery === greet || lowerQuery.startsWith(greet + " ")
    );

    if (isGreeting) {
      return "Hello! I'm Thoughtful AI's support agent. Ask me anything about our automation agents like EVA, CAM, or PHIL.";
    }

    // Search based on keywords
    const match = faqData.find((item) =>
      item.keywords.some((kw) => lowerQuery.includes(kw))
    );

    return (
      match?.answer ||
      "I'm not sure I understand. Please try asking about EVA, CAM, or PHIL."
    );
  };

  const handleSend = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setMessages((prev) => [
        ...prev,
        { text: "Please enter a valid question.", sender: "bot" },
      ]);
      return;
    }

    const userMessage = { text: trimmedInput, sender: "user" };

    try {
      const botMessage = {
        text: getBotResponse(trimmedInput),
        sender: "bot",
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);
      setInput("");
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        userMessage,
        {
          text: "Oops! Something went wrong. Please try again later.",
          sender: "bot",
        },
      ]);
      console.error("Error in bot response:", error);
    }
  };


  return (
    <div className="chat-container">
      <h1>Thoughtful AI Support Agent</h1>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <ChatBubble key={i} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Ask me something..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default App;
