import './assets/output.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainPage';
import ModifyAccountPage from './pages/ModifyAccountPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/modify" component={ModifyAccountPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

