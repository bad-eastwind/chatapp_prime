'use client'
import Chatbox from './Chatbox'
import LeftChatlist from './LeftChatlist'
import React from 'react';
import Avatar from '@mui/material/Avatar';

const ChatScreen = () => {
    return (
      <div style={{ display: 'flex'}}>
        <LeftChatlist />
        <Chatbox />
      </div>
    );
  };
  
  export default ChatScreen;
