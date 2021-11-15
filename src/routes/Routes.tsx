import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import Home from '../pages/Home/Home';
import MoviePage from '../pages/MoviPage/MoviePage';
import Registration from '../pages/Registration/Registration';
import SignUp from '../pages/SignUp/SignUp';
import SearchPage from '../pages/SearchPage/SearchPage';
import SessionPage from '../pages/SessionPage/SessionPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import UserPage from '../pages/UserPage/UserPage';
import './Routes.scss';

const routes = [
  { path: '/', name: 'Home', Component: Home, private: true },
  { path: '/movie/:id', name: 'Movie', Component: MoviePage, private: true },
  { path: '/registration', name: 'Registration', Component: Registration },
  { path: '/sign-up', name: 'SignUp', Component: SignUp },
  { path: '/search', name: 'SearchPage', Component: SearchPage, private: true },
  { path: '/session', name: 'SessionPage', Component: SessionPage },
  { path: '/favorite', name: 'FavoritePage', Component: FavoritePage, private: true },
  { path: '/profile', name: 'UserPage', Component: UserPage, private: true },
  { path: '/404', name: 'ErrorPage', Component: ErrorPage }
]


export default function Routes() {
  //const nodeRef: React.RefObject<HTMLDivElement> = useRef(null);

  return(
    <Switch>
      {/* {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
            nodeRef={nodeRef}
          >
            <div className="page" ref={nodeRef}>
              <Component />
            </div>
          </CSSTransition>
          )}
          <Component />
        </Route>
      ))}
      <Route component={ErrorPage} /> */}
      {/* <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/registration" component={Registration} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/search" component={SearchPage} />
      <Route path="/session" component={SessionPage} />
      <Route path="/favorite" component={FavoritePage} />
      <Route path="/profile" component={UserPage} />
      <Route path="/404" component={ErrorPage} /> */}
      {routes.map((route, i) => {
        return route.private ? (
          <Route
            key={i}
            path={route.path}
            exact
            render={(props) => {
              if (localStorage.getItem('session_id')) {
               return <route.Component />;
              }
              return <Redirect to="/sign-up" />;
            }}
          />
          ) : (
           <Route key={i} path={route.path} component={route.Component} exact />
          )
      })}
      <Redirect to="/404" />
    </Switch>
  );
}