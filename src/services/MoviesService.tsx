import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const moviApi = createApi({
  reducerPath: 'moviApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'
  }),
  endpoints: (build) => ({
    fetchMovies: build.query({
      query: () => ({
        url: '/discover/movie?api_key=2f0edced0eb8f8de8ec567844341d6df'
      })
    })
  })
})

export const { useFetchMoviesQuery } = moviApi