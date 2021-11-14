import React from "react";
import { Box } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { useCheckMarkMovieQuery, useMarkMovieAsFavoriteMutation } from "../../services/UserService";

interface Props {
  id: number
}

const CardOptions:React.FC<Props> = ({id}) => {
  const session_id = localStorage.getItem('session_id');
  const marked = useCheckMarkMovieQuery({session_id, id});
  const [markMovieAsFavorite, {}] = useMarkMovieAsFavoriteMutation();

  const markMovie = async (e:React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    await markMovieAsFavorite({
      session_id: session_id,
      body: {
        media_type: 'movie',
        media_id: id,
        favorite: true
      }
    });
    marked.refetch()
  }

  return(
    <>
      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#c4c4c4' }
        }} 
        onClick={markMovie}   
      >
        <Favorite fontSize='small' sx={{marginRight: '10px', color: marked.data?.favorite ? '#f30000' : '#000'}} />
        Favorite
      </Box>
      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#c4c4c4' }
        }}
      >
        <PlaylistPlayIcon fontSize='small' sx={{marginRight: '10px'}} />
        Add to list
      </Box>
    </>
  )
}

export default CardOptions