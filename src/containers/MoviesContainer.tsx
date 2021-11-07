import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "../components/MovieCard/MovieCard";
import { IMovie } from "../modules";

interface Items {
  items: IMovie[] | undefined
}

const MoviesContainer: React.FC<Items> = ({ items }) => {
  return (
    <Grid item md={3}>
      {
        items && items.map(item => <MovieCard item={item} key={item.id} />)
      }
    </Grid>
  )
}

export default MoviesContainer