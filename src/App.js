import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AddCar from './components/AddCar';
import DeleteCar from './components/DeleteCar';
import AddReservation from './components/AddReservation';
import MyReservations from './components/MyReservations';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/delete_cars" element={<DeleteCar />} />
        <Route path="/create_reservation" element={<AddReservation />} />
        <Route path="/my_reservations" element={<MyReservations />} />
      </Routes>
    </>
  );
}

export default App;
