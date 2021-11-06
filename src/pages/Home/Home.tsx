import { useFetchMoviesQuery } from "../../services/MoviesService";
import { Container } from "@mui/material";

export default function Home() {
  const f = useFetchMoviesQuery('');
  return (
    <div className="home-view">
      <Container maxWidth='lg'></Container>
    </div>
  )
}