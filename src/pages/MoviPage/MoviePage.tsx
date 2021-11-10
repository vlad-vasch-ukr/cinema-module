import React from 'react';
import { useParams } from 'react-router';
import { useFetchCurrentMovieQuery } from "../../services/MoviesService";
import { Container } from '@mui/material';


interface Params {
  id: string
}

const MoviePage:React.FC = () => {
  const { id } = useParams<Params>();
  const { data: data } = useFetchCurrentMovieQuery(id);
  console.log(data)

  return (
    <div className="movie-page">
      <div className="mavie-page__header">
        <Container maxWidth='lg'></Container>
      </div>
    </div>
  )
}

export default MoviePage