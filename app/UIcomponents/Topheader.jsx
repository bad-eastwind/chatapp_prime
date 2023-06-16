'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function Topheader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Home</Button>
        <Button>Chat</Button>
        <Button>Contacts</Button>
        <Button>Settings</Button>
        <Button>FAQ's</Button>
        <Button>Terms of Use</Button>
        <Button>Search</Button>
        <Button>Notifs</Button>
      </ButtonGroup>
    </Box>
  );
}