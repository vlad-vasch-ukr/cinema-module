import { useFetchMoviesQuery, useFetchMovieCategoriesQuery, useFetchLanguagesQuery } from "../../services/MoviesService";
import { Container, Box } from "@mui/material";
import MoviesContainer from "../../containers/MoviesContainer";
import { useState } from "react";
import CPagination from '../../components/CPagination/CPagination';
import SortMovies from '../../components/SortMovies/SortMovies';

interface SearchParams {
  language:string 
  page:number
  sort_by:string
  with_genres: string,
}

interface Filters {
  with_genres: Array<number>,
  language: string
}

export default function Home() {
  const [sortParams, setSortParams] = useState<SearchParams>({
    page: 1, 
    sort_by: 'popularity.desc',
    with_genres: '',
    language: 'en-US'
  })
  const {data: results} = useFetchMoviesQuery(sortParams);
  const {data: genres} = useFetchMovieCategoriesQuery('');
  const { data: languages } = useFetchLanguagesQuery('');
  const changePage = (page:number):void => {
    setSortParams({
      ...sortParams,
      page: page
    })
  }
  const getFilters = (filters:Filters):void => {
    setSortParams({
      ...sortParams,
      with_genres: filters.with_genres.join(','),
      language: filters.language
    })
  }

  return (
    <div className="home-view">
      <Container maxWidth='lg'>
        <Box display='grid' gap={3} gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 3">
            <SortMovies genres={genres?.genres} languages={languages} handler={getFilters} />
          </Box>
          <Box gridColumn="span 9">
            <MoviesContainer items={results?.results} />
            {
              results?.total_pages && 
              results?.total_pages > 1 && 
              <CPagination
                pageCount={results?.total_pages}
                defaultPage={1}
                handler={changePage}
              />
            }
          </Box>
        </Box>
      </Container>
    </div>
  )
}