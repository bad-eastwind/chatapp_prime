'use client'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/system';

const ExtendedFab = styled(Fab)({
    width: '300px', // Set the desired width here
    height: '60px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  });

const ExtendedFab1 = styled(Fab)({ 
display: 'flex',
justifyContent: 'flex-end',
// alignItems: 'flex-end',
});

const FabContainer1 = styled('div')({
    display: 'flex',
    gap: '20px', // Set the desired gap between the FABs
  });

const FabContainer = styled('div')({
  display: 'flex',
  gap: '600px', // Set the desired gap between the FABs
});

export default function FloatingActionButtons() {
  return (
    <div>
      <FabContainer>
        <FabContainer1>
          <Box sx={{ marginLeft: '40px' , '& > :not(style)': { m: 1 } }}>
            <ExtendedFab variant="extended" size="large">
              <span style={{ marginRight: '8px' }}>
                <SearchRoundedIcon sx={{ mr: 1 }} />
                Search
              </span>
            </ExtendedFab>
          </Box>
        </FabContainer1>
        <FabContainer1>
          {/* RIght side contents */}
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <ExtendedFab1 variant="extended" size="large">
              Clear Chat
            </ExtendedFab1>
          </Box>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <ExtendedFab1 variant="extended" size="large">
              More
            </ExtendedFab1>
          </Box>
        </FabContainer1>
      </FabContainer>
    </div>
  );
}