import React from 'react';
import { Route } from 'react-router-dom';
import { useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Registration from './pages/Registration/Registration';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/movie/:id', name: 'Movie', Component: Movie },
  { path: '/registration', name: 'Registration', Component: Registration },
]


export default function Routes() {
  const nodeRef: React.RefObject<HTMLDivElement> = useRef(null);

  return(
    <>
      {routes.map(({ path, Component }) => (
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
        </Route>
      ))}
    </>
  );
}