import './assets/output.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoomDetailPage from './pages/roomDetailPage';
import TripListPage from './pages/TripListPage';
import BookingContainer from './containers/BookingContainer';
import SearchContainer from './containers/SearchContainer';
import MainPage from './pages/MainPage';
import ModifyAccountPage from './pages/ModifyAccountPage';
import RedirectPage from './pages/RedirectPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/booking" component={BookingContainer} />
        <Route path="/accommodation/:room_id" component={RoomDetailPage} />
        <Route path="/reservation" component={TripListPage} />
        <Route path="/accommodations" component={SearchContainer} />
        <Route path="/ " component={ModifyAccountPage} />
        <Route path="/" exact component={MainPage} />
        <Route path="/redirect" component={RedirectPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
