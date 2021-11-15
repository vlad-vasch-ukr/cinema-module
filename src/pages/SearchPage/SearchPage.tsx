import React from "react";
import { useLocation } from "react-router";
import { useFetchSearchMoviesQuery } from "../../services/MoviesService";
import SimpleMovieCard from "../../components/SimpleMovieCard/SimpleMovieCard";
import { Container, Grid } from "@mui/material";
import CPagination from "../../components/CPagination/CPagination";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './SearchPage.scss';

interface SearchParams {
  query: string
  language: string
  page: number
}

const SearchPage:React.FC = () => {
  const { i18n } = useTranslation();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const [params, setParams] = useState<SearchParams>({
    query: query.get('query') || '',
    language: i18n.language,
    page: 1
  });
  const resuts = useFetchSearchMoviesQuery(params);

  const changePage = (page:number):void => {
    setParams({
      ...params,
      page
    })
  }

  i18n.on('languageChanged', () => {
    setParams({
      ...params,
      language: i18n.language
    })
  })

  useEffect(() => {
    return () => {
      i18n.off('languageChanged')
    }
  }, [i18n])

  return(
    <div className="search-page">
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          {
            resuts.data?.results && 
            resuts.data.results.map(movie => {
              return(
                <Grid item xs={6} key={movie.id}>
                  <SimpleMovieCard item={movie} />
                </Grid>
              )
            })
          }
        </Grid>
        <CPagination pageCount={resuts.data?.total_pages} defaultPage={1} handler={changePage} />
      </Container>
    </div>
  )
}

export default SearchPage