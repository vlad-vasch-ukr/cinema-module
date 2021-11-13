import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router';
import { useFetchCurrentMovieQuery, useFetchRecommendationsQuery, useFetchMovieCreditsQuery, useFetchMovieKeyWordsQuery } from "../../services/MoviesService";
import Recommendations from '../../components/Recommendations/Recommendation';
import MovieCredits from '../../components/MovieCredits/MovieCredits';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AboutMovie from '../../components/AboutMovie/AboutMovie';
import './MoviePage.scss';

interface Params {
  id: string
}

const MoviePage:React.FC = () => {
  const { id } = useParams<Params>();
  const { data: data } = useFetchCurrentMovieQuery(id);
  const { data: results } = useFetchRecommendationsQuery(id);
  const credits = useFetchMovieCreditsQuery(id);
  const keyWords = useFetchMovieKeyWordsQuery(id);

  return (
    <div className="movie-page">
      <Box className="movie-page__header" sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img
          src={data?.backdrop_path ? `${process.env.REACT_APP_IMG}${data?.backdrop_path}` : ''}
          draggable='false'
          className="movie-page__bg-poster"
        />
        <Container maxWidth='lg'>
          <Box>
            <Box
              sx={{
                maxWidth: '300px',
                borderRadius: '15px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}
            >
              {
                data?.poster_path ?
                <img
                  src={`${process.env.REACT_APP_IMG}${data?.poster_path}`}
                  alt={data?.original_title}
                  draggable='false'
                  className='poster'
                /> : 
                <MovieCreationIcon />
              }
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth='lg' sx={{ paddingTop: '50px' }}>
        <Grid container columnSpacing={3}>
          <Grid item xs={9}>
            <Box sx={{ marginBottom: '40px' }}>
              <Typography component='h2' variant='h4' sx={{ textAlign: 'start', marginBottom: '20px' }}>
                Top Billed Cast
              </Typography>
              <MovieCredits credits={credits.data?.cast} />
            </Box>
            <Box>
              <Typography component='h2' variant='h4' sx={{ textAlign: 'start', marginBottom: '20px' }}>
                Recommendations
              </Typography>
              <Recommendations items={ results?.results } />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <AboutMovie movie={data} keyWords={keyWords.data?.keywords} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default MoviePage