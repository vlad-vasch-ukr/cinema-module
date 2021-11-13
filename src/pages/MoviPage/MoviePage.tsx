import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router';
import { 
  useFetchCurrentMovieQuery, 
  useFetchRecommendationsQuery, 
  useFetchMovieCreditsQuery, 
  useFetchMovieKeyWordsQuery
} from "../../services/MoviesService";
import Recommendations from '../../components/Recommendations/Recommendation';
import MovieCredits from '../../components/MovieCredits/MovieCredits';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AboutMovie from '../../components/AboutMovie/AboutMovie';
import CircleRating from '../../components/CircleRating/CircleRating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from '@mui/icons-material/ListAlt';
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

  const getGenres = ():string => {
    const genres = data?.genres.map(genre => genre.name);
    if (genres) return genres?.join(', ');
    return ''
  }

  const getRunTime = ():string => {
    if (data?.runtime) {
      const hours = Math.floor(data?.runtime / 60);
      const min = data?.runtime - hours * 60;
      return `${hours}h ${min}m`
    }
    return ''
  }

  return (
    <div className="movie-page">
      <Box className="movie-page__header" sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img
          src={data?.backdrop_path ? `${process.env.REACT_APP_IMG}${data?.backdrop_path}` : ''}
          draggable='false'
          className="movie-page__bg-poster"
          alt={data?.title}
        />
        <Container maxWidth='xl'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                maxWidth: '300px',
                width: '100%',
                borderRadius: '15px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}
            >
              {
                !!data?.poster_path ?
                <img
                  src={`${process.env.REACT_APP_IMG}${data?.poster_path}`}
                  alt={data?.original_title}
                  draggable='false'
                  className='poster'
                  style={{width: '100%'}}
                /> : 
                <MovieCreationIcon />
              }
            </Box>
            <Box sx={{ color: '#fff', textAlign: 'start', paddingLeft: '45px' }}>
              <Typography component='h1' variant='h4' fontWeight='700'>
                { data?.title }({ data?.release_date.split('-')[0] }) 
              </Typography>
              <Box mb={4} sx={{display: 'flex'}}>
                <Box mr={1}>
                  { data?.release_date.split('-').join('/') } ({data?.original_language.toLocaleUpperCase()})
                </Box>
                <Box mr={1}>
                &sdot; { getGenres() } &sdot;
                </Box>
                <Box>
                  { getRunTime() }
                </Box>
              </Box>
              <Box mb={3} sx={{ maxWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CircleRating raiting={ data?.vote_average } />
                <Box
                  sx={{bgcolor: 'primary.dark',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <FavoriteIcon />
                </Box>
                <Box
                  sx={{bgcolor: 'primary.dark',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ListAltIcon />
                </Box>
              </Box>
              <Typography component='p' sx={{ fontWeight: 600, fontSize: '22px' }}>
                Overview
              </Typography>
              <Typography component='p'>
                {data?.overview}
              </Typography>
              <Box display="grid" rowGap={2} gridTemplateColumns="repeat(12, 1fr)" mt={3}>
                {
                  credits.data?.crew.slice(0,6).map(item => {
                    return (
                      <Box gridColumn="span 4" key={item.credit_id}>
                        <Typography sx={{ fontWeight: 600 }}>
                          { item.name }
                        </Typography>
                        <Typography>
                          { item.department }
                        </Typography>
                      </Box>
                    )
                  })
                }
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth='xl' sx={{ paddingTop: '50px' }}>
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