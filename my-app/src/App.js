import{
  Route,
  Routes
} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './pages/Home';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Bookings from './pages/Bookings';

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reservations" element={<Bookings/>} />
          <Route path="/reservaton-confirmation" element={<ConfirmedBooking/>} />
        </Routes>
      </Main>

      <Footer />
    </>
  );
};

export default App;
