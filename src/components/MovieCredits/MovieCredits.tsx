import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { ICast } from "../../modules";
import FaceIcon from '@mui/icons-material/Face';
import './MovieCredits.scss';

interface Props {
  credits: ICast[] | undefined
}

const MovieCredits:React.FC<Props> = ({ credits }) => {
  const containerWidth = credits ? 153 * credits.slice(0, 10).length + 'px' : 0;

  return (
    <div className="movie-credits">
      <Box sx={{ minWidth: containerWidth, display: 'flex' }}>
        {
          credits && credits.slice(0, 10).map(credit => {
            return (
              <Card sx={{ height: '273px', marginRight: '15px', maxWidth: '138px' }} key={credit.id}>
                <div className="movie-credits__img-wrap">
                  {
                    credit.profile_path ?
                    <img
                      className="movie-credits__img"
                      src={ `${process.env.REACT_APP_IMG}${credit.profile_path}` }
                      alt={credit.name}
                      draggable='false'
                    /> :
                    <FaceIcon />
                  }
                </div>
                <Box sx={{ padding: '10px' }}>
                  <Typography component='p' sx={{ fontWeight: 600, fontSize: '14px' }}>
                    { credit.name }
                  </Typography>
                  <Typography component='p' mt={1} sx={{ fontSize: '13px' }}>
                    { credit.character }
                  </Typography>
                </Box>
              </Card>
            )
          })
        }
      </Box>
    </div>
  )
}

export default MovieCredits