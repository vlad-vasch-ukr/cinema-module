import React from "react";
import { useFetchUserQuery } from '../../services/UserService';
import { Card, Typography, Box, CardContent, CardMedia } from "@mui/material";

const UserPage:React.FC = () => {
  const sessionId = localStorage.getItem('session_id');
  const user = useFetchUserQuery(sessionId);
  return(
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: '300px', width: '100%' }}>
        <Typography component='h1' variant='h4'>
          Profile
        </Typography>
        {
          user.data?.avatar?.tmdb?.avatar_path &&
          <CardMedia component="img" image={`${process.env.REACT_APP_IMG}${user.data?.avatar?.tmdb?.avatar_path}`} alt="green iguana" />
        }
        <CardContent sx={{textAlign: 'start'}}>
          <Typography mt={2}>
            User Id: {user.data?.id}
          </Typography>
          <Typography mt={2}>
            User Name: {user.data?.username}
          </Typography>
          <Typography mt={2}>
            User language: {user.data?.iso_639_1}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default UserPage