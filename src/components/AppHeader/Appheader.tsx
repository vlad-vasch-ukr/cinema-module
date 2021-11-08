import React from "react";
import { AppBar, Toolbar, IconButton, Box, Button, InputBase, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LangSelect from "../LangSelect/LangSelect";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppHeader: React.FC = () => {

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
      <Container>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box className='app-logo'>
            <Link to='/'>cinema</Link>
          </Box>
          <Box>
            <ThemeSwitch />
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* <Box>
            <NavLink to="/registration" activeStyle={{ color: 'red' }} >Registration</NavLink>
            <NavLink to="/sign-up" activeStyle={{ color: 'red' }} >Sign</NavLink>
          </Box> */}
          <LangSelect />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader