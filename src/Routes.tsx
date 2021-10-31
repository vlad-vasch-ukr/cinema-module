import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';


export default function Routes() {
  return(
    <>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/movie/:id" exact component={ Movie } />
      </Switch>
    </>
  );
}