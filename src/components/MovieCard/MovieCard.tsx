import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea, IconButton, Box, Collapse } from "@mui/material";
import { IMovie } from '../../modules';
import { useHistory } from 'react-router';
import { useState } from "react";
import CircleRating from '../CircleRating/CircleRating';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardOptions from '../CardOptions/CardOptions';

interface IMovieCard {
  item: IMovie
}

const MovieCard: React.FC<IMovieCard> = ({ item }) => {
  const history = useHistory();
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  
  const goToMovie = (id:number):void => {
    history.push(`/movie/${id}`)
  }

  const toggleOptions = (e:React.MouseEvent<HTMLButtonElement>):void => {
    e.stopPropagation();
    setOpenOptions(!openOptions);
  }

  return (
    <Card sx={{ height: '100%', position: 'relative' }} onClick={ goToMovie.bind(null, item.id) }>
      <CardActionArea sx={{ height: '100%' }}>
        <Box sx={{height: '380px', bgcolor: '#c4c4c4'}}>
          {
            item.poster_path && 
              <CardMedia
                component="img"
                height='380'
                image={`${process.env.REACT_APP_IMG}${item.poster_path}`}
                alt={item.title}
              />
          }
        </Box>
        <CardContent sx={{ position: 'relative', paddingTop: '30px' }}>
          <Typography component='p' color="text.primary">
            { item.title }
          </Typography>
          <Typography variant='body2' component='p' color="text.secondary">
            { item.release_date }
          </Typography>
          <Box 
            sx={{
              position: 'absolute',
              top: '-23px',
              left: '10px'
            }}
          >
            <CircleRating raiting={ item.vote_average } />
          </Box>
        </CardContent>
      </CardActionArea>
      <Box sx={{ position: 'absolute', top: '5px', right: '5px', zIndex: 50 }}>
        <IconButton
          aria-label="add to favorites"
          onClick={toggleOptions}
          sx={{
            backgroundColor: '#c4c4c4',
            height: '30px',
            width: '32px',
            '&:hover': { backgroundColor: '#15d9e2' },
            transition: 'all 0.3s ease-in'
          }}
        >
          <MoreVertIcon sx={{ color: '#000' }} />
        </IconButton>
        <Collapse
          in={openOptions}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            transform: 'translate(-100%, 100%)',
            color: '#000',
            fontSize: '12px',
            minWidth: '125px',
            minHeight: '80px'
          }}
        >
          { openOptions && <CardOptions id={item.id} /> }
        </Collapse>
      </Box>
    </Card>
  )
}

export default MovieCard