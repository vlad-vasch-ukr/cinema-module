import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    
  }
)

const initialState = {
  user: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = userSlice.actions;
export const userReducer = userSlice.reducer;
