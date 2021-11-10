import React from 'react';
import { Box, List, Collapse, ListItem, TextField, MenuItem, Button } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { useState } from 'react';
import { IGenre, ILang } from '../../modules';
import './SortMovies.scss';

interface SortParams {
  genres: IGenre[] | undefined,
  languages: ILang[] | undefined,
  handler: any
}

interface Filters {
  with_genres: Array<number>,
  language: string
}

const SortMovies: React.FC<SortParams> = ({ genres, languages, handler }) => {
  const [openFilters, setOpenFilters] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>({
    with_genres: [],
    language: ''
  });

  const toggleGanre = (id:number):void => {
    const selected:boolean = filters.with_genres.includes(id);

    if (selected) {
      setFilters({
        ...filters,
        with_genres: filters.with_genres.filter(genreId => genreId !== id)
      })
    } else {
      setFilters({
        ...filters,
        with_genres: [...filters.with_genres, id]
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
            <ListItem sx={{ flexDirection: 'column', borderTop: '1px solid', borderColor: 'divider' }}>
              <Box sx={{width: '100%'}}>
                <TextField
                  variant='outlined'
                  value={filters.language}
                  select
                  fullWidth
                  label='Select language'
                  onChange={(e) => setFilters({...filters, language: e.target.value})}
                >
                  { !languages && <MenuItem value='' disabled>None</MenuItem> }
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
                    const selected = filters.with_genres.includes(item.id);

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
          <Button
            onClick={handler.bind(null, filters)}
            variant='contained'
            size='large'
            sx={{ backgroundColor: '#00e7ff', marginBottom: '15px', '&:hover': {backgroundColor: '#006671'} }}
            disabled={!(filters.with_genres.length || filters.language)}
          >
            Search
          </Button>
        </Collapse>
      </Box>
    </Box>
  )
}

export default SortMovies