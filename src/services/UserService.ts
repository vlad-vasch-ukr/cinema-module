import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'
  }),
  endpoints: (build) => ({
    fetchUser: build.query({
      query: () => ({
        url: '/discover/movie?api_key=2f0edced0eb8f8de8ec567844341d6df',
        params: {

        }
      })
    }),
    getAuthToken: build.query({
      query: () => ({
        url: '/authentication/token/new',
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    })
  })
})

export const { useFetchUserQuery } = userApi