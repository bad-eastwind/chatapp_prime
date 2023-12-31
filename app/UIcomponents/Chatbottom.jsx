"use client";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from "@mui/system";
import { Icon } from "@mui/material";
// const ExtendedFab = styled(Fab)({
//   width: "550px", // Set the desired width here
//   // height: "60px",
//   display: "flex",
//   justifyContent: "flex-start",
//   alignItems: "center",
// });

const FabContainer1 = styled('div')({
    display: 'flex',
    gap: '20px', // Set the desired gap between the FABs
  });
const handleFocus = () => {
  const label = document.querySelector("Type your message");
  label.style.display = "none";
};

const handleBlur = () => {
  const label = document.querySelector("Type your message");
  label.style.display = "block";
};

const TextFieldWithIcon = () => {
  return (
    <TextField id="filled-basic"  variant="filled" onFocus={handleFocus} onBlur={handleBlur} 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SentimentSatisfiedAltIcon/>
          </InputAdornment>
        )
      }}>
        Type your message
      </TextField>
  );
};


export default function Chatbottom() {
  return (
    <div>
        <FabContainer1>
      <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off">
        {/* <TextField id="filled-basic" label="Type your message" variant="filled" onFocus={handleFocus} onBlur={handleBlur} sx = {{borderRadius: '30px'}}>
        </TextField> */}
      <TextFieldWithIcon />
      </Box>
      </FabContainer1>
    </div>
  );
}

{/* <SentimentSatisfiedAltIcon sx={{ mr: 1 }} />
            Type a message
            <AttachFileIcon sx={{ mr: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'left', }} /> */}
