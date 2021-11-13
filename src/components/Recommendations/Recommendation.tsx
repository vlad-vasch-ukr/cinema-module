import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { IRecommendation } from "../../modules";
import { useHistory } from "react-router";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ListAltIcon from '@mui/icons-material/ListAlt';
import './Recommendation.scss';

interface RecommendationsProps {
  items: IRecommendation[] | undefined
}

const Recommendations:React.FC<RecommendationsProps> = ({ items }) => {
  const history = useHistory();
  const goToMovie = (id:number):void => {
    history.push(`/movie/${id}`)
  }

  return (
    <div className="movie-recommendations">
      <div className="movie-recommendations__container">
        {
          items && items.map((item) => {
            return (
              <Card
                className='movie-recommendations__card'
                key={item.id}
                sx={{ width: '250px', marginRight: '10px', cursor: 'pointer' }}
                onClick={goToMovie.bind(null, item.id)}
              >
                <div className='movie-recommendations__poster-wrap'>
                  { item.poster_path ? 
                      <img
                        src={ `${process.env.REACT_APP_IMG}${item.backdrop_path}` }
                        alt={ item.title } draggable='false'
                        className='movie-recommendations__poster'
                      /> : '' 
                  }
                  <div
                    className="movie-recommendations__actions"
                    onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                  >
                    <Typography component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                      <EventNoteIcon />
                      {item.release_date.split('-').join('/')}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '50px', width: '100%' }}>
                      <FavoriteIcon sx={{ height: '15px' }} />
                      <ListAltIcon sx={{ height: '15px' }} />
                    </Box>
                  </div>
                </div>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                  <Typography component='p' sx={{
                    fontSize: '15px',
                    textAlign: 'start',
                    whiteSpace: 'nowrap',
                    maxWidth: '230px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                    }}
                  >
                    { item.original_title }
                  </Typography>
                  <Typography>
                    {Math.round(item.vote_average * 10)}%
                  </Typography>
                </Box>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommendations