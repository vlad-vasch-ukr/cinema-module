import { createSlice } from "@reduxjs/toolkit"

interface MoviesState {
  movies: Array<string>;
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: ''
}

export const MoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  }
})

export default MoviesSlice.reducer;
