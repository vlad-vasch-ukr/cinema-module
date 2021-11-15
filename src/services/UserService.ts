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

interface MarkGet {
  status_code: number
  status_message: string
}

interface MarkPost {
  session_id: string | null
  body: {
    media_type: string
    media_id: number | string
    favorite: boolean
  }
}

interface Favorite {
  id: number
  favorite: boolean
  rated: object | boolean
  watchlist: boolean
}

interface MarkParams {
  session_id: string | null
  id: number | string
}

interface ListPost {
  session_id: string | null
  body: {
    media_type: string
    media_id: number | string
    watchlist: boolean
  }
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
    }),
    markMovieAsFavorite: build.mutation<MarkGet, MarkPost>({
      query: ({session_id, body}) => ({
        url: `/account/-/favorite`,
        method: 'POST',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          session_id
        },
        body
      })
    }),
    checkMarkMovie: build.query<Favorite, MarkParams>({
      query: ({session_id, id}) => ({
        url: `/movie/${id}/account_states`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          session_id
        },
      })
    }),
    addMovieToList: build.mutation<MarkGet, ListPost>({
      query: ({session_id, body}) => ({
        url: `/account/{account_id}/watchlist`,
        method: 'POST',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          session_id
        },
        body
      })
    }),
  })
})

export const { useFetchUserQuery, useMarkMovieAsFavoriteMutation, useCheckMarkMovieQuery, useAddMovieToListMutation } = userApi