import './App.css';
import './assets/output.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoomDetailPage from './pages/RoomDetailPage';
import TripListPage from './pages/TripListPage';
import BookingContainer from './containers/BookingContainer';
import SearchContainer from './containers/SearchContainer';
import MainPage from './pages/MainPage';
import ModifyAccountPage from './pages/ModifyAccountPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/booking" component={BookingContainer} />
        <Route path="/room" component={RoomDetailPage} />
        <Route path="/reservation" component={TripListPage} />
        <Route path="/accommodations" component={SearchContainer} />
        <Route path="/modify" component={ModifyAccountPage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
