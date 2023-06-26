'use client'
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Chatbubble = ({ message, author, direction }) => {
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);

  return (
    <Paper
      style={{
        width: "20%",
        borderRadius: "10px",
        margin: "5px",
        padding: "10px",
        display: "inline-block",
        position: "relative",
        backgroundColor: direction === "left" ? "green" : "red",
      }}
    >
      <Typography variant="body1">
        {message}
      </Typography>
      {isFirst && (
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <Typography variant="caption">First message</Typography>
        </div>
      )}
      {isLast && (
        <div style={{ position: "absolute", bottom: 0, right: 0 }}>
          <Typography variant="caption">Last message</Typography>
        </div>
      )}
    </Paper>
  );
};

export default Chatbubble;

