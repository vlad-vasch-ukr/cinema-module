import React from 'react';
import { Typography, Box } from '@mui/material';

const ErrorPage:React.FC = () => {
  return(
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography component='h1' variant='h1'>
        404:(
      </Typography>
    </Box>
  )
}

export default ErrorPage