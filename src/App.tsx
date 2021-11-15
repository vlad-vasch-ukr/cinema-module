import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Theme from './components/Theme/Theme';
import './plugins/i18n';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Theme>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
