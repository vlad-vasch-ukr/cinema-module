import React from "react";
import { Box, Typography } from "@mui/material";
import { ICurrMovie } from "../../modules";
import { useTranslation } from 'react-i18next';

interface KeyWord {
  id: number
  name: string
}

interface Props {
  movie: ICurrMovie | undefined
  keyWords: Array<KeyWord> | undefined
}

const AboutMovie:React.FC<Props> = ({ movie, keyWords }) => {
  const { t } = useTranslation();
  const getOriginalLang = ():string => {
    const lang = movie?.spoken_languages.find(lang => lang.iso_639_1 === movie.original_language);
    if (lang) return lang.name;
    return ''
  }

  const formatPrice = (price:number | undefined):string => {
    if (price) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return formatter.format(price);
    }
    return ''
  }

  return(
    <Box sx={{ textAlign: 'start', paddingTop: '55px' }}>
      <Box>
        <Typography component='p' sx={{ fontWeight: 600 }}>
          { t('moviePage.status') }
        </Typography>
        <Typography component='p'>
          { movie?.status }
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography component='p' sx={{ fontWeight: 600 }}>
          { t('moviePage.lang') }
        </Typography>
        <Typography component='p'>
          { getOriginalLang() || '-' }
        </Typography>
      </Box>
      {
        !!movie?.budget && <Box mt={2}>
          <Typography component='p' sx={{ fontWeight: 600 }}>
            { t('moviePage.budget') }
          </Typography>
          <Typography component='p'>
            { formatPrice(movie?.budget) }
          </Typography>
        </Box>
      }
      {
        !!movie?.revenue && <Box mt={2}>
          <Typography component='p' sx={{ fontWeight: 600 }}>
            { t('moviePage.revenue') }
          </Typography>
          <Typography component='p'>
            { formatPrice(movie?.revenue) }
          </Typography>
        </Box>
      }
      {
        !!keyWords?.length && <Box mt={2}>
          <Typography component='p' variant='h6' sx={{ fontWeight: 600 }}>
            { t('moviePage.keywords') }
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '15px' }}>
            {
              keyWords && keyWords.map(word => {
                return (
                  <Box
                    sx={{ padding: '0 10px', border: '1px solid', bgcolor: 'background.paper', margin: '0 10px 10px 0' }}
                    key={word.id}
                  >
                    { word.name}
                  </Box>
                )
              })
            }
          </Box>
        </Box>
      }
    </Box>
  )
}

export default AboutMovie