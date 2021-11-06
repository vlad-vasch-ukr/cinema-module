import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';

export interface Auth {
  title: string,
  path: string,
  pathName: string,
  children: React.ReactChild | React.ReactNode
}

const linkStyle = {
  color: blue[500],
  textDecoration: 'none',
  fontSize: '16px'
}

const AuthForm: React.FC<Auth> = ({ title,  path, pathName, children }) => {

  return (
    <Card sx={{ maxWidth: 500, width: '100%', padding: '15px' }}>
      <Typography align='center' component='p' variant='h4'>
        { title }
      </Typography>
      <CardContent>
        { children }
        <Typography component='div' mt={2}>
          <Link to={ '/' + path }style={ linkStyle } >
            { pathName }
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AuthForm