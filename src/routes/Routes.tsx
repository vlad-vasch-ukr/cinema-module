import React from 'react';
import { Route } from 'react-router-dom';
import { useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import Home from '../pages/Home/Home';
import MoviePage from '../pages/MoviPage/MoviePage';
import Registration from '../pages/Registration/Registration';
import SignUp from '../pages/SignUp/SignUp';
import SearchPage from '../pages/SearchPage/SearchPage';
import SessionPage from '../pages/SessionPage/SessionPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';
import './Routes.scss';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/movie/:id', name: 'Movie', Component: MoviePage },
  { path: '/registration', name: 'Registration', Component: Registration },
  { path: '/sign-up', name: 'SignUp', Component: SignUp },
  { path: '/search', name: 'SearchPage', Component: SearchPage },
  { path: '/session', name: 'SessionPage', Component: SessionPage },
  { path: '/favorite', name: 'FavoritePage', Component: FavoritePage },
]


export default function Routes() {
  const nodeRef: React.RefObject<HTMLDivElement> = useRef(null);

  return(
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {/* {({ match }) => (
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
          )} */}
          <Component />
        </Route>
      ))}
    </>
  );
}