import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface User {
  avatar: object
  gravatar: {
    hash: string
  }
  id: number
  iso_639_1: string
  iso_3166_1: string
  name: string
  include_adult: boolean
  username: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (build) => ({
    fetchUser: build.query<User, string | null>({
      query: (session_id) => ({
        url: '/account',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          session_id
        }
      })
    })
  })
})

export const { useFetchUserQuery } = userApi