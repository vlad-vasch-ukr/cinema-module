import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import MoviesReducer from './reducers/MoviesSlice';
import { combineReducers } from 'redux';
import { moviApi } from '../services/MoviesService';
import { userApi } from '../services/UserService';
import { themeReducer } from './reducers/Theme';
import { userReducer } from './reducers/Auth';

const rootReducer = combineReducers({
  MoviesReducer,
  themeReducer,
  [moviApi.reducerPath]: moviApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  userReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviApi.middleware, userApi.middleware)
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
