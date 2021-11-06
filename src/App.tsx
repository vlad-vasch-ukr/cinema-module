import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import MainLayout from './containers/MainLayout';
import Theme from './components/Theme/Theme';
import './App.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './style.scss';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Registration from './pages/Registration/Registration';
import { Route } from 'react-router-dom';
import { useRef } from 'react';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/movie/:id', name: 'Movie', Component: Movie },
  { path: '/registration', name: 'Registration', Component: Registration },
]

function App() {
  const nodeRef = useRef(null);
  return (
    <div className="App">
      <Theme>
        <BrowserRouter>
          <MainLayout>
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
          </MainLayout>
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
