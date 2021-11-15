import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  raiting: number | undefined
}

const CircleRating:React.FC<Props> = ({ raiting = 0 }) => {
  const getColor = () => {
    if (raiting < 4) return 'error';
    if (raiting < 7 && raiting >= 4) return 'warning';
    return 'success'
  }
  
  return (
    <Box 
      sx={{
        display: 'inline-flex',
        backgroundColor: 'primary.main',
        borderRadius: '50%',
        padding: '3px',
        position: 'relative'
      }}
    >
      <CircularProgress
        variant='determinate'
        color={ getColor() }
        value={Math.round(raiting * 10)}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#fff"
          fontWeight='600'
        >
          {`${Math.round(raiting * 10)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default CircleRating