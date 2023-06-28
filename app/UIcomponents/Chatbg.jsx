'use client'
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@material-ui/core/Typography";
import Chatbox from './Chatbox'
import Chatbottom from './Chatbottom';
import { styled } from "@mui/system"

const FabContainer1 = styled('div')({
  display: 'flex',
  gap: '5px', // Set the desired gap between the FABs
});

export default function Chatbg() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 700,
          borderRadius: '15px',
        },
      }}
    >
      <Paper elevation={0}>
      <Typography >
        <Chatbox/>
        <Chatbottom/>
      </Typography>
      </Paper>
    </Box>
  );
}