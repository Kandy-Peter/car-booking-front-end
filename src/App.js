import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AddCar from './components/AddCar';
import DeleteCar from './components/DeleteCar';
import AddReservation from './components/AddReservation';
import MyReservations from './components/MyReservations';
import Loading from './components/Loading';
import CarDetails from './components/CarDetails';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const cars = useSelector((state) => state.carReducers.cars);
  return (
    <>
      <Navbar />
      <Routes>
        {!cars.length ? (
          <Route path="/" element={<Loading />} />
        ) : (
          <Route path="/" element={<Homepage />} />
        )}
        <Route exact path="/car/:id" exactly element={<CarDetails />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/delete_cars" element={<DeleteCar />} />
        <Route path="/create_reservation" element={<AddReservation />} />
        <Route path="/my_reservations" element={<MyReservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
