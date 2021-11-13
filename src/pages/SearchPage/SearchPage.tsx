import React from "react";
import { useLocation } from "react-router";
import { useFetchSearchMoviesQuery } from "../../services/MoviesService";
import SimpleMovieCard from "../../components/SimpleMovieCard/SimpleMovieCard";
import './SearchPage.scss';

const SearchPage:React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchValue = query.get('query') || '';
  const resuts = useFetchSearchMoviesQuery(searchValue);

  return(
    <div className="search-page"></div>
  )
}

export default SearchPage