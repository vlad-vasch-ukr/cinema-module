import React from "react";
import { useLocation } from "react-router";
import { useFetchSearchMoviesQuery } from "../../services/MoviesService";
import SimpleMovieCard from "../../components/SimpleMovieCard/SimpleMovieCard";
import { Container, Grid } from "@mui/material";
import './SearchPage.scss';

const SearchPage:React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchValue = query.get('query') || '';
  const resuts = useFetchSearchMoviesQuery(searchValue);

  return(
    <div className="search-page">
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          {
            resuts.data?.results && 
            resuts.data.results.map(movie => {
              return(
                <Grid item xs={6} key={movie.id}>
                  <SimpleMovieCard item={movie} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </div>
  )
}

export default SearchPage