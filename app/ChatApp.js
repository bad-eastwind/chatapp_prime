// components/ChatApp.js
'use client';

import React, { useContext } from 'react';
import { ChatContext } from './ChatContext';
import chatSocket from './ChatSocket';

// const messages = " ";

const ChatApp = () => {
  const { messages, sendMessage } = useContext(ChatContext);

  const handleSendMessage = (message) => {
    sendMessage(message);
  };

  return (
    <div>
      {/* Render messages and input field */}
      {messages.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
      <input type="text" placeholder="Type your message" onChange={(e) => handleSendMessage(e.target.value)} />
    </div>
  );
};

export default ChatApp;
