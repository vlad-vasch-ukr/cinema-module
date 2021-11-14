import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
import { IMovie } from "../../modules";
import TheatersIcon from '@mui/icons-material/Theaters';
import format from "date-fns/fp/format";
import { useHistory } from "react-router";
import './SimpleMovieCard.scss';

interface Props {
  item: IMovie 
}

const SimpleMovieCard:React.FC<Props> = ({ item }) => {
  const history = useHistory();
  const formatDate = ():string => {
    const dateArr = item.release_date.split('-');
    return format('PPP', new Date(+dateArr[0], +dateArr[1], +dateArr[2]));
  }

  const goToMovie = ():void => {
    history.push(`/movie/${item.id}`)
  }

  return(
    <Card
      className='simple-card'
      sx={{ cursor: 'pointer', borderRadius: '15px', display: 'flex' }}
      onClick={goToMovie}
    >
      <Box
        sx={{
          width: '94px',
          height: '160px',
          minWidth: '94px',
          backgroundColor: '#c4c4c4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}
      >
        {
          !!item.poster_path ?
          <img src={`${process.env.REACT_APP_IMG}${item.poster_path}`} alt={item.title} /> :
          <TheatersIcon fontSize='large' />
        }
      </Box>
      <CardContent sx={{ flexGrow: 1, textAlign: 'start' }}>
        <Typography component='p' variant='h5' sx={{ fontWeight: 600 }}>
          { item.title }
        </Typography>
        <Typography sx={{ color: '#c4c4c4' }}>
          { formatDate() }
        </Typography>
        <Typography sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', overflow: 'hidden' }} mt={2}>
          { item.overview }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SimpleMovieCard