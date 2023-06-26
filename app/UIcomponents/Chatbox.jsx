'use client'
import React from 'react';
import Chatbubble from './Chatbubble';

const Chatbox = () => {
  return (
    <div>
      <Chatbubble message = {'Hi there'} author={'Diasha'} direction={"left"} />
      <Chatbubble message = {'Hello there'} author={'Anwesh'} direction={"right"} />
    </div>
  );
};

export default Chatbox;