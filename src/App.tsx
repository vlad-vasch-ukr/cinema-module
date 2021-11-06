import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import MainLayout from './containers/MainLayout';
import Theme from './components/Theme/Theme';
import './App.css';

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