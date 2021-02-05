import './App.css';
import './assets/output.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RoomDetailPage from './pages/roomDetailPage';
import TripListPage from './pages/TripListPage';
import BookingContainer from './containers/BookingContainer';
import SearchContainer from './containers/SearchContainer';

function App() {
  return (
    <BrowserRouter>
      <Route path="/booking" component={BookingContainer} />
      <Route path="/room" component={RoomDetailPage} />
      <Route path="/reservation" component={TripListPage} />
      <Route path="/accommodations" component={SearchContainer} />
    </BrowserRouter>
  );
}

export default App;
