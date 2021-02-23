import './assets/output.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoomDetailPage from './pages/RoomDetailPage';
import TripListPage from './pages/TripListPage';
import BookingContainer from './containers/BookingContainer';
import SearchContainer from './containers/SearchContainer';
import MainPage from './pages/MainPage';
import ModifyAccountPage from './pages/ModifyAccountPage';
import RedirectPage from './pages/RedirectPage';
import WishListPage from './pages/WishListPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/booking/:subPage" component={BookingContainer} />
        <Route
          path="/accommodation/:accommodation_id"
          component={RoomDetailPage}
        />
        <Route path="/reservation" component={TripListPage} />
        <Route path="/wishlist" component={WishListPage} />
        <Route path="/accommodations" component={SearchContainer} />
        <Route path="/modify" component={ModifyAccountPage} />
        <Route path="/" exact component={MainPage} />
        <Route path="/redirect" component={RedirectPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
