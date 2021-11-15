import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IMovie, IGenre, ILang, ICurrMovie, IRecommendation, ICredits } from '../modules';

interface Movies {
  page: number,
  results: IMovie[] | undefined,
  total_results: number,
  total_pages: number
}

interface SearchParams {
  with_original_language:string 
  page:number
  sort_by:string,
  language: string
}

interface Genres {
  genres: IGenre[]
}

interface Recommendations {
  page: number
  results: IRecommendation[]
  total_pages: number
  total_results: number
}

interface KeyWords {
  id: number
  keywords: {
    id: number
    name: string
  }[]
}

interface Search {
  query: string
  language: string
  page: number
}

interface FavoriteMoviesParams {
  session_id: string | null
  language: string
  page: number
}

interface General {
  id: string
  language: string
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
    }),
    fetchMovieCategories: build.query<Genres, string>({
      query: () => ({
        url: '/genre/movie/list',
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    }),
    fetchLanguages: build.query<ILang[], string>({
      query: () => ({
        url: '/configuration/languages',
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    }),
    fetchCurrentMovie: build.query<ICurrMovie, General>({
      query: ({id, language}) => ({
        url: `/movie/${id}`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language
        }
      })
    }),
    fetchRecommendations: build.query<Recommendations, General>({
      query: ({id, language}) => ({
        url: `/movie/${id}/recommendations`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language
        }
      })
    }),
    fetchMovieCredits: build.query<ICredits, General>({
      query: ({id, language}) => ({
        url: `/movie/${id}/credits`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language
        }
      })
    }),
    fetchMovieKeyWords: build.query<KeyWords, General>({
      query: ({id, language}) => ({
        url: `/movie/${id}/keywords`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language
        }
      })
    }),
    fetchSearchMovies: build.query<Movies, Search>({
      query: ({query, language, page}) => ({
        url: '/search/movie',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query,
          language,
          page
        }
      })
    }),
    fetchFavoriteMovies: build.query<Movies, FavoriteMoviesParams>({
      query: (params) => ({
        url: '/account/-/favorite/movies',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          ...params
        }
      })
    })
  })
})

export const { 
  useFetchMoviesQuery, 
  useFetchMovieCategoriesQuery, 
  useFetchLanguagesQuery, 
  useFetchCurrentMovieQuery, 
  useFetchRecommendationsQuery,
  useFetchMovieCreditsQuery,
  useFetchMovieKeyWordsQuery,
  useFetchSearchMoviesQuery,
  useFetchFavoriteMoviesQuery
} = moviApi