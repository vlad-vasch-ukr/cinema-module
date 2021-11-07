import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import MainLayout from './layouts/MainLayout';
import Theme from './components/Theme/Theme';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Theme>
        <BrowserRouter>
          <MainLayout>
            <Routes />
          </MainLayout>
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
