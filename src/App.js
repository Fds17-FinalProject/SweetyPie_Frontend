import { BrowserRouter, Route } from 'react-router-dom';
import './assets/output.css';
import RoomDetailPage from './pages/roomDetailPage';
import TripListPage from './pages/TripListPage';
import BookingContainer from './containers/BookingContainer';

function App() {
  return (
    <BrowserRouter>
      <Route path="/booking" component={BookingContainer} />
      <Route path="/room" component={RoomDetailPage} />
      <Route path="/reservation" component={TripListPage} />
    </BrowserRouter>
  );
}

export default App;
