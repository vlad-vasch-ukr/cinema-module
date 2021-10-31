import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MoviesReducer from './reducers/MoviesSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  MoviesReducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
