import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { IMovie } from '../../modules';

interface IMovieCard {
  item: IMovie,
  handler?: any
}

const MovieCard: React.FC<IMovieCard> = ({ item, handler = () => {} }) => {
  return(
    <Card sx={{ height: '100%' }} onClick={handler}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height='400'
          image={`${process.env.REACT_APP_IMG}${item.poster_path}`}
          alt={item.title}
        />
        <CardContent>
          <Typography component='p' color="text.primary">
            { item.title }
          </Typography>
          <Typography variant='body2' component='p' color="text.secondary">
            { item.release_date }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard