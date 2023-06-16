'use client'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function FloatingActionButtons() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended">
          <SearchRoundedIcon sx={{ mr: 1 }} />
          Search
        </Fab>
      </Box>
    );
  }