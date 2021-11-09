import React from 'react';
import { Box, List, Collapse, ListItem, TextField, MenuItem } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { useState } from 'react';
import { IGenre, ILang } from '../../modules';
import './SortMovies.scss';

interface SortParams {
  genres: IGenre[] | undefined,
  languages: ILang[] | undefined
}

interface Filters {
  without_genres: Array<number>,
  language: string
}

const SortMovies: React.FC<SortParams> = ({ genres, languages }) => {
  const [openFilters, setOpenFilters] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>({
    without_genres: [],
    language: ''
  });

  const toggleGanre = (id:number):void => {
    const selected:boolean = filters.without_genres.includes(id);

    if (selected) {
      setFilters({
        ...filters,
        without_genres: filters.without_genres.filter(genreId => genreId !== id)
      })
    } else {
      setFilters({
        ...filters,
        without_genres: [...filters.without_genres, id]
      })
    }
  }

  return (
    <Box>
      <Box>
        <Box
          className={ openFilters ? 'open-filter' : '' }
          sx={{ 
            padding: '15px', 
            borderRadius: '10px', 
            bgcolor: 'background.paper', 
            cursor: 'pointer',
            textAlign: 'start',
            fontWeight: 600,
            transition: 'all 0.5s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          onClick={() => setOpenFilters(!openFilters)}
        >
          Filters
          {openFilters ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse
          sx={{ bgcolor: 'background.paper', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}
          in={openFilters}
          timeout="auto"
          unmountOnExit
        >
          <List component="ul" disablePadding>
            <ListItem sx={{ flexDirection: 'column' }}>
              <Box>
                Language
              </Box>
              <Box sx={{width: '100%'}}>
                <TextField
                  variant='outlined'
                  value={filters.language}
                  select
                  fullWidth
                  onChange={(e) => setFilters({...filters, language: e.target.value})}
                >
                  <MenuItem value='' selected>None Selected</MenuItem>
                  {
                    languages && languages.map(lang => <MenuItem value={lang?.iso_639_1} key={lang?.iso_639_1}>{lang?.english_name}</MenuItem>)
                  }
                </TextField>
              </Box>
            </ListItem>
            <ListItem sx={{ flexDirection: 'column', padding: '0' }}>
              <Box sx={{ padding: '15px', borderBottom: '1px solid', borderTop: '1px solid', borderColor: 'divider', width: '100%', textAlign: 'start' }}>
                Genres
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
                {
                  genres && genres.map(item => {
                    const selected = filters.without_genres.includes(item.id);

                    return(
                      <Box
                        key={item.id}
                        sx={{
                          padding: '2px 15px',
                          border: '1px solid',
                          textAlign: 'center',
                          borderRadius: '15px',
                          marginBottom: '8px',
                          marginRight: '8px',
                          bgcolor: 'background.paper',
                          cursor: 'pointer',
                          fontSize: '13px',
                          transition: 'all 0.1s ease-in',
                          '&:hover': { backgroundColor: 'rgb(1,180,228)', color: '#fff' }
                        }}
                        className={ selected ? 'selected-genre' : '' }
                        onClick={toggleGanre.bind(null, item.id)}
                      >
                        { item.name }
                      </Box>
                    )
                  })
                }
              </Box>
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </Box>
  )
}

export default SortMovies