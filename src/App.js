import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import Home from './Pages/home/Home';
import Footer from './Components/footer/Footer';
import Admin from './Pages/admin/Admin';
import Dashboard from './Components/dashboard/Dashboard';
import EmployeeForm from './Components/form/EmployeeForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Admin />} path='/admin/' >
            <Route element={<Dashboard/>} path='' />
            <Route element={<h1>Welcome </h1>} path='hospital' />
          </Route>
          <Route element={<EmployeeForm/>}path='/empform' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
