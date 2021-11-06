import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MoviesReducer from './reducers/MoviesSlice';
import { combineReducers } from 'redux';
import { moviApi } from '../services/MoviesService';

const rootReducer = combineReducers({
  MoviesReducer,
  [moviApi.reducerPath]: moviApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviApi.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
