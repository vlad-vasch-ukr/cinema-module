import React from "react";
import { AppBar, Toolbar, Box, Button, Container, Collapse } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LangSelect from "../LangSelect/LangSelect";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from "react";
import Search from "../Search/Search";
import './AppHeader.scss';

const AppHeader: React.FC = () => {
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

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
                <Button onClick={() => setOpenSearch(!openSearch)}>
                  <SearchIcon fontSize='large' sx={{color: '#fff'}} />
                </Button>
              </Box>
              <Box sx={{marginRight: '20px'}}>
                <LangSelect />
              </Box>
              <Box sx={{position: 'relative'}}>
                <Button onClick={() => setOpenAccount(!openAccount)}>
                  <AccountCircleIcon fontSize='large' sx={{cursor: 'pointer', color: '#fff'}} />
                </Button>
                <Collapse
                  in={openAccount}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%, 100%)',
                    boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'primary.light',
                      padding: '15px',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <ExitToAppIcon sx={{marginRight: '10px'}} />
                    Exit
                  </Box>
                </Collapse>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Search sx={['search', openSearch ? 'open' : '']}/>
    </div>
  )
}

export default AppHeader