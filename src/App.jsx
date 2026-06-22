
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Beranda from './pages/Beranda';

function App() {
  return (
    <Router>
      <Routes>
      
        {/* Alamat http://localhost:5173/login */}
        <Route path="/login" element={<Login />} />
        
        {/* Alamat http://localhost:5173/daftar */}
        <Route path="/daftar" element={<Daftar />} />

          {/* Alamat utama (http://localhost:5173/) akan langsung membuka Beranda */}
        <Route path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
}

export default App;