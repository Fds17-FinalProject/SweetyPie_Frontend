import logo from './logo.svg';
import './App.css';
import './assets/output.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer';

function App() {
  return (
    <BrowserRouter>
      <Route path="/accommodations" component={SearchContainer} />
    </BrowserRouter>
  );
}

export default App;
