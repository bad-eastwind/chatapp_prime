'use client'
import React from 'react';
import { Box } from '@mui/material';

const ChatBubble = ({ text, isSender }) => {
  const bubbleStyles = {
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'coloumn',
    backgroundColor: isSender ? '#28282B' : '#39FF14',
    alignItems: isSender ? 'flex-end' : 'flex-start',
    maxWidth: '70%',
    marginBottom: '10px',
  };

  return (
    <Box sx={bubbleStyles}>
      <p>{text}</p>
    </Box>
  );
};

export default ChatBubble;
