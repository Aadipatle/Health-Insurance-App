import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Admin from './Pages/admin/Admin';
import Dashboard from './Components/dashboard/Dashboard';
import EmpForm from './Components/form/EmpForm';
import HospitalComponent from './Components/hospitalform/HospitalForm';
import HospitalPay from './Components/hospitalpayment/HospitalPay';
import EmpList from './Components/emplist/EmpList';
import HospitalHome from './Pages/hospitalPanel/HospitalHome';
import FamilyMemberForm from './Components/famiymember/AddFamilyMember';
import Login from './Components/adminLogin/Login';
import PrivateRoute from './Components/adminLogin/Protected';
import HospitalLogin from './Components/hospitalLogin/Login';
import HospitalProtected from './Components/hospitalLogin/Protected';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Login />} path='/login' />
          <Route element={<HospitalLogin />} path='/hospitallogin' />
          <Route element={<Home />} path='/' />
          <Route element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          } path='/admin/' >
            <Route element={<Dashboard />} path='' />
            <Route element={<h1>Welcome </h1>} path='hospital' />
            <Route element={<EmpForm />} path='empform' />
            <Route element={<FamilyMemberForm />} path='familyform' />
            <Route element={<HospitalPay />} path='hospitalpay' />
            <Route element={<EmpList />} path='emplist' />
            <Route element={<HospitalComponent />} path='hospitalform' />
          </Route>
          <Route element={
            <HospitalProtected>
              <HospitalHome />
            </HospitalProtected>
          } path='hospitalhome' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
