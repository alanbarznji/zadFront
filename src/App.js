import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home/Home';
import { Container } from 'react-bootstrap';
import Navbar from './utility/Navbar';
import Login from './page/Auth/Login';
import AdminHome from './page/Admin/AdminHome';
import Hawkar from './page/Admin/Hawkar';
import FormyPrkraw from './page/Admin/FormyPrkraw';
import SignUp from './page/Auth/SignUp';
import AdminHistory from './page/Admin/AdminHistory';
import Formytawawkraw from './page/Admin/Formytawawkraw';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  return (
    <BrowserRouter >
      <Navbar/>
    <Container className='pt-5'>
    <Routes>
<Route path='/' element={<Home />}/>
<Route path='/login' element={<Login />}/>
<Route path='/signup' element={<SignUp />}/>
<Route path='/AdminHome' element={<AdminHome />}/>
<Route path='/Hawkar/' element={<Hawkar />}/>
<Route path='/FormyPrkraw/:id' element={<FormyPrkraw />}/>
<Route path='/Formytawawkraw/:id' element={<Formytawawkraw />}/>
<Route path='/History' element={<AdminHistory />}/>
    </Routes>       
    </Container>
    </BrowserRouter>
  );
}

export default App;