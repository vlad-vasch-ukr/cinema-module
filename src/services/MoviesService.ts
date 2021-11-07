import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IMovie } from '../modules';

interface Movies {
  page: number,
  results: IMovie[] | undefined,
  total_results: number,
  total_pages: number
}

export const moviApi = createApi({
  reducerPath: 'moviApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (build) => ({
    fetchMovies: build.query<Movies, string>({
      query: (lang:string = 'en-US', page:number = 1, sort:string = 'popularity.desc') => ({
        url: '/discover/movie',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: lang,
          page: page,
          sort_by: sort
        }
      })
    })
  })
})

export const { useFetchMoviesQuery } = moviApi