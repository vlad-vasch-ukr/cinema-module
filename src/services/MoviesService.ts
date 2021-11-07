import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IMovie } from '../modules';

interface Movies {
  page: number,
  results: IMovie[] | undefined,
  total_results: number,
  total_pages: number
}

interface SearchParams {
  language:string 
  page:number
  sort_by:string
}

export const moviApi = createApi({
  reducerPath: 'moviApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (build) => ({
    fetchMovies: build.query<Movies, SearchParams>({
      query: (params) => ({
        url: '/discover/movie',
        params: {
          ...params,
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    })
  })
})

export const { useFetchMoviesQuery } = moviApi