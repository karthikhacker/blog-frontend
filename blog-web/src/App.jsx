import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import UpdatePassword from './pages/UpdatePassword';
import axios from 'axios';

axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget/password" element={<ForgetPassword />} />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/update/password" element={<UpdatePassword />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App