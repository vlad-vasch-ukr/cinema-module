import React from "react";
import { styled } from '@mui/material/styles';
import { InputBase, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const CSearch = styled('div')(({ theme }) => ({
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
  color: '#000',
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

interface Props {
  sx: Array<string>
}

const Search:React.FC<Props> = ({sx}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [searchValue, setSearchVAlue] = useState<string>('');
  const goToSearchPage = (e:React.KeyboardEvent<HTMLInputElement>):void => {
    if (e.key === 'Enter') {
      history.push(`/search?query=${searchValue}`)
    }
  }

  return(
    <CSearch className={sx.join(' ')}>
      <Container maxWidth='xl'>
        <SearchIconWrapper>
          <SearchIcon fontSize='large' sx={{color: '#000'}} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={ t('search') }
          fullWidth
          inputProps={{ 'aria-label': 'search' }}
          sx={{ height: '60px' }}
          value={searchValue}
          onKeyPress={goToSearchPage}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchVAlue(e.target.value)}
        />
      </Container>     
    </CSearch>
  )
}

export default Search