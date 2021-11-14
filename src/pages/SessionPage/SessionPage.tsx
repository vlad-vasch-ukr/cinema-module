import React from "react";
import { Typography } from "@mui/material";
import { generateSessionId } from "../../api/auth";
import { useEffect } from "react";
import { useHistory } from "react-router";

const SessionPage:React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("request_token");
    generateSessionId(token).then(() => {
      history.push('/')
    })
  })

  return(
    <div className="session-page">
      <Typography component='h1' variant='h3' mt={4}>
        Welcome to session
      </Typography>
    </div>
  )
}

export default SessionPage