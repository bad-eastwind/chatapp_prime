"use client";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/system";

const ExtendedFab = styled(Fab)({
  width: "550px", // Set the desired width here
  // height: "60px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

const FabContainer1 = styled('div')({
    display: 'flex',
    gap: '20px', // Set the desired gap between the FABs
  });

export default function Chatbottom() {
  return (
    <div>
        <FabContainer1>
      <Box sx={{ marginLeft: "40px", "& > :not(style)": { m: 1 } }}>
        <ExtendedFab variant="extended" size="large">
          <span style={{ marginRight: "8px" }}>
            <SentimentSatisfiedAltIcon sx={{ mr: 1 }} />
            Type a message
            <AttachFileIcon sx={{ mr: 1 }} />
          </span>
        </ExtendedFab>
      </Box>
      </FabContainer1>
    </div>
  );
}
