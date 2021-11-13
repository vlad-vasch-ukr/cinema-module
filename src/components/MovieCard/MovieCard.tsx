import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea, IconButton, Box } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { IMovie } from '../../modules';
import { useHistory } from 'react-router';
import CircleRating from '../CircleRating/CircleRating';

interface IMovieCard {
  item: IMovie
}

const MovieCard: React.FC<IMovieCard> = ({ item }) => {
  const history = useHistory();

  const goToMovie = (id:number):void => {
    history.push(`/movie/${id}`)
  }

  return (
    <Card sx={{ height: '100%', position: 'relative' }} onClick={ goToMovie.bind(null, item.id) }>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height='380'
          image={`${process.env.REACT_APP_IMG}${item.poster_path}`}
          alt={item.title}
        />
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
      <IconButton
        aria-label="add to favorites"
        onClick={(e:React.MouseEvent<HTMLButtonElement>) => console.log('favorite')}
        sx={{ position: 'absolute', top: '5px', right: '5px' }}
      >
        <FavoriteBorder sx={{ color: '#000', '&:hover': { color: '#f30000' } }} />
      </IconButton>
    </Card>
  )
}

export default MovieCard