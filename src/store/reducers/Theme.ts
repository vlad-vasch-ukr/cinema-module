import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLightMode: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightMode = !state.isLightMode;
    },
    changeCurrTheme: (state, action) => {
      state.isLightMode = action.payload
    }
  },
});

export const { toggleTheme, changeCurrTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
