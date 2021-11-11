import React from "react";
import { Card } from "@mui/material";
import { IRecommendation } from "../../modules";
import './Recommendation.scss';

interface RecommendationsProps {
  items: IRecommendation[] | undefined
}

const Recommendations:React.FC<RecommendationsProps> = ({ items }) => {
  return (
    <div className="movie-recommendations">
      <div className="movie-recommendations__container">
        {
          items && items.map((item) => {
            return (
              <Card key={item.id} sx={{ width: '250px', marginRight: '10px' }}>
                <div className='movie-recommendations__poster-wrap'>
                  { item.poster_path ? 
                      <img
                        src={ `${process.env.REACT_APP_IMG}${item.backdrop_path}` }
                        alt={ item.title } draggable='false'
                        className='movie-recommendations__poster'
                      /> : '' 
                  }
                </div>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommendations