// contexts/ChatContext.js
"use client"
import React, { createContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // Implement logic to send message through WebSocket
    // Update the messages state
  };

  const value = {
    messages,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export { ChatContext, ChatProvider };
