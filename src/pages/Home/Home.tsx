import { useFetchMoviesQuery } from "../../services/MoviesService";
import { Container, Box } from "@mui/material";
import MoviesContainer from "../../containers/MoviesContainer";
import { useState } from "react";

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
  

  return (
    <div className="home-view">
      <Container maxWidth='lg'>
        <Box display='grid' gap={2} gridTemplateColumns="repeat(12, 1fr)">
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 8">
            <MoviesContainer items={results?.results} />
          </Box>
        </Box>
      </Container>
    </div>
  )
}