import { useFetchMoviesQuery } from "../../services/MoviesService";
import { Container } from "@mui/material";
import MoviesContainer from "../../containers/MoviesContainer";

export default function Home() {
  const {data: results, refetch} = useFetchMoviesQuery('en-US');
  return (
    <div className="home-view">
      <Container maxWidth='lg'>
        <MoviesContainer items={results?.results} />
      </Container>
    </div>
  )
}