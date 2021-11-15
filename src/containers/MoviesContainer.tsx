import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "../components/MovieCard/MovieCard";
import { IMovie } from "../modules";

interface Items {
  items: IMovie[] | undefined
}

const MoviesContainer: React.FC<Items> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {
        items && items.map(item => {
          return (
            <Grid item xs={6} sm={4} md={4} key={item.id}>
              <MovieCard item={item} options={true} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default MoviesContainer