'use client'
import Chatbox from './Chatbox'
import LeftChatlist from './LeftChatlist'
import React from 'react';
import Chatbg from './Chatbg'

const ChatScreen = () => {
    return (
      <div style={{ display: 'flex'}}>
        <LeftChatlist />
        <Chatbg/>
        {/* <Chatbox /> */}
      </div>
    );
  };
  
  export default ChatScreen;
