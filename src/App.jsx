import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
