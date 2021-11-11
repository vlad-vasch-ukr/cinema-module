import React from 'react';
import { Box, Card } from '@mui/material';
import { useParams } from 'react-router';
import { useFetchCurrentMovieQuery, useFetchRecommendationsQuery } from "../../services/MoviesService";
import { Container } from '@mui/material';
import Recommendations from '../../components/Recommendations/Recommendation';
import './MoviePage.scss';

interface Params {
  id: string
}

const MoviePage:React.FC = () => {
  const { id } = useParams<Params>();
  const { data: data } = useFetchCurrentMovieQuery(id);
  const { data: results } = useFetchRecommendationsQuery(id);

  return (
    <div className="movie-page">
      <Box className="movie-page__header" sx={{ position: 'relative' }}>
        <img
          src={data?.backdrop_path ? `${process.env.REACT_APP_IMG}${data?.backdrop_path}` : ''}
          draggable='false'
          className="movie-page__bg-poster"
        />
        <Container maxWidth='lg'>

        </Container>
      </Box>
      <Box>
        <Container maxWidth='lg'>
          <Recommendations items={ results?.results } />
        </Container>
      </Box>
    </div>
  )
}

export default MoviePage