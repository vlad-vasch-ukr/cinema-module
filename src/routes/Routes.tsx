import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MoviePage from '../pages/MoviPage/MoviePage';
import Registration from '../pages/Registration/Registration';
import SignUp from '../pages/SignUp/SignUp';
import SearchPage from '../pages/SearchPage/SearchPage';
import SessionPage from '../pages/SessionPage/SessionPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import UserPage from '../pages/UserPage/UserPage';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import './Routes.scss';

const routes = [
  { path: '/', name: 'Home', Component: Home, private: true },
  { path: '/movie/:id', name: 'Movie', Component: MoviePage, private: true },
  { path: '/registration', name: 'Registration', Component: Registration },
  { path: '/sign-up', name: 'SignUp', Component: SignUp },
  { path: '/search', name: 'SearchPage',  Component: SearchPage, private: true },
  { path: '/session', name: 'SessionPage', Component: SessionPage },
  { path: '/favorite', name: 'FavoritePage', Component: FavoritePage, private: true },
  { path: '/profile', name: 'UserPage', Component: UserPage, private: true },
  { path: '/404', name: 'ErrorPage', Component: ErrorPage }
]


export default function Routes() {

  return(
    <Switch>
      {routes.map((route, i) => {
        return route.private ? (
          <Route
            key={i}
            path={route.path}
            exact
            render={(props) => {
              if (localStorage.getItem('session_id')) {
               return(
                 <MainLayout>
                   <route.Component />
                 </MainLayout>
               )
              }
              return <Redirect to="/sign-up" />;
            }}
          />
          ) : (
           <Route
            key={i}
            path={route.path}
            exact
            render={(props) => {
              return(
                <AuthLayout>
                  <route.Component />
                </AuthLayout>
              )
            }}
          />
          )
      })}
      <Redirect to="/404" />
    </Switch>
  );
}