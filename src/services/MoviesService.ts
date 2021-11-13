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
  sort_by:string
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
    fetchCurrentMovie: build.query<ICurrMovie, string>({
      query: (id:string) => ({
        url: `/movie/${id}`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    }),
    fetchRecommendations: build.query<Recommendations, string>({
      query: (id:string) => ({
        url: `/movie/${id}/recommendations`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    }),
    fetchMovieCredits: build.query<ICredits, string>({
      query: (id:string) => ({
        url: `/movie/${id}/credits`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    }),
    fetchMovieKeyWords: build.query<KeyWords, string>({
      query: (id:string) => ({
        url: `/movie/${id}/keywords`,
        params: {
          api_key: process.env.REACT_APP_API_KEY
        }
      })
    }),
    fetchSearchMovies: build.query<Movies, string>({
      query: (query:string) => ({
        url: '/search/movie',
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query,
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
  useFetchSearchMoviesQuery
} = moviApi