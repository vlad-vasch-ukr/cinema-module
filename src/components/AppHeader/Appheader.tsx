import React from "react";
import { AppBar, Toolbar, IconButton, Box, Button, InputBase, Container, Collapse } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LangSelect from "../LangSelect/LangSelect";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from "react";
import './AppHeader.scss';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(7)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppHeader: React.FC = () => {
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <div className="nav-bar">
      <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Box className='app-logo'>
              <Link to='/'>cinema</Link>
            </Box>
            <Box>
              <ThemeSwitch />
            </Box>
            <Box>
              <Button onClick={() => setOpenSearch(!openSearch)}>
                <SearchIcon fontSize='large' sx={{color: '#fff'}} />
              </Button>
            </Box>
            <LangSelect />
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
          </Toolbar>
        </Container>
      </AppBar>
      <Search className={['search', openSearch ? 'open' : ''].join(' ')}>
        <Container maxWidth='xl'>
          <SearchIconWrapper>
            <SearchIcon fontSize='large' />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            fullWidth
            inputProps={{ 'aria-label': 'search' }}
            sx={{ height: '60px' }}
          />
        </Container>     
      </Search>
    </div>
  )
}

export default AppHeader