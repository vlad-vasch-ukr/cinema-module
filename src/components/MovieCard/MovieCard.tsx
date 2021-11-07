import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { IMovie } from '../../modules';

interface IMovieCard {
  item: IMovie,
  handler?: Function
}

const MovieCard: React.FC<IMovieCard> = ({ item, handler }) => {
  return(
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={`${process.env.REACT_APP_IMG}${item.poster_path}`}
        alt={item.title}
      />
      <CardContent>
        <Typography variant='h6' component='p' color="text.secondary">
          { item.title }
        </Typography>
        <Typography variant='body2' component='p' color="text.secondary">
          { item.release_date }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard