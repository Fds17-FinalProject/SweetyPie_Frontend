<<<<<<< HEAD
import './App.css';
import './assets/output.css';

function App() {
  return <div className="App">안녕</div>;
=======
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
>>>>>>> 199b1195dac238c635d16e89c4b58431a6ad5a8c
}

export default App;
