import { useFetchMoviesQuery, useFetchMovieCategoriesQuery } from "../../services/MoviesService";
import { Container, Box } from "@mui/material";
import MoviesContainer from "../../containers/MoviesContainer";
import { useState } from "react";
import CPagination from '../../components/CPagination/CPagination';

interface SearchParams {
  language:string 
  page:number
  sort_by:string
}

export default function Home() {
  const [sortParams, setSortParams] = useState<SearchParams>({
    language: 'en-US', 
    page: 1, 
    sort_by: 'popularity.desc'
  })
  const {data: results} = useFetchMoviesQuery(sortParams);
  const {data: genres} = useFetchMovieCategoriesQuery('');
  const changePage = (page:number):void => {
    setSortParams({
      ...sortParams,
      page: page
    })
  }

  return (
    <div className="home-view">
      <Container maxWidth='lg'>
        <Box display='grid' gap={3} gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 3"></Box>
          <Box gridColumn="span 9">
            <MoviesContainer items={results?.results} />
            <CPagination
              pageCount={results?.total_pages}
              defaultPage={1}
              handler={changePage}
            />
          </Box>
        </Box>
      </Container>
    </div>
  )
}