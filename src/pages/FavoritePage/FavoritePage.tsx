import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { useFetchFavoriteMoviesQuery } from '../../services/MoviesService';
import MovieCard from '../../components/MovieCard/MovieCard';
import CPagination from '../../components/CPagination/CPagination';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FavoriteMoviesParams {
  session_id: string | null
  language: string
  page: number
}

const FavoritePage:React.FC = () => {
  const { i18n } = useTranslation();
  const sessionId = localStorage.getItem('session_id');
  const [params, setParams] = useState<FavoriteMoviesParams>({
    session_id: sessionId,
    language: i18n.language,
    page: 1
  })
  const favorite = useFetchFavoriteMoviesQuery(params);

  i18n.on('languageChanged', () => {
    setParams({
      ...params,
      language: i18n.language
    })
  })

  const changePage = (page:number):void => {
    setParams({
      ...params,
      page
    })
  }

  return(
    <div className="favorite-page">
      <Container maxWidth='xl'>
        <Typography component='h1' variant='h4' mt={4} mb={3} sx={{fontWeight: 600, textAlign: 'start'}}>
          Favorite movies
        </Typography>
        <Grid container spacing={4}>
          {
            favorite.data?.results && favorite.data.results.map(movie => {
              return(
                <Grid item xs={6} sm={4} md={3} key={movie.id}>
                  <MovieCard item={movie} />
                </Grid>
              )
            })
          }
        </Grid>
        {
          favorite.data?.total_pages && 
          favorite.data?.total_pages > 1 && 
            <CPagination
              pageCount={favorite.data?.total_pages}
              defaultPage={1}
              handler={changePage}
            />
        }
      </Container>
    </div>
  )
}

export default FavoritePage