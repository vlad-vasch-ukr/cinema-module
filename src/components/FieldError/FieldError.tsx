import React from "react";
import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export interface Props {
  message: string
}

const FieldError: React.FC<Props> = ({message}) => {
  return (
    <Typography component='p' sx={{height: '17px', color: red[500], fontSize: '15px', display: 'flex', alignItems: 'center', textAlign: 'start'} }>
      { message }
    </Typography>
  )
}

export default FieldError