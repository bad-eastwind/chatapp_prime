'use client'
import React from 'react';
import Chatbubble from './Chatbubble';

const ChatPage = () => {
  return (
    <div>
      <Chatbubble text="Hello!" isSender={false} />
      <Chatbubble text="Hi there!" isSender={true} />
    </div>
  );
};

export default ChatPage;