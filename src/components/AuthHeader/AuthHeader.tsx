import React from "react";
import { AppBar, Toolbar, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LangSelect from "../LangSelect/LangSelect";

const AuthHeader: React.FC = () => {

  return (
    <div className="nav-bar">
      <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Box className='app-logo' sx={{marginRight: '20px'}}>
              <Link to='/'>cinema</Link>
            </Box>
            <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>
              <Box sx={{marginLeft: 'auto', marginRight: '20px'}}>
                <ThemeSwitch />
              </Box>
              <Box sx={{marginRight: '20px'}}>
                <LangSelect />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default AuthHeader