import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Beranda from './pages/Beranda';
import Eksplorasi from './pages/Eksplorasi';
import DetailResep from './pages/DetailResep'; // 👈 1. Tambahkan import ini

function App() {
  return (
    <Router>
      <Routes>
        {/* Alamat utama langsung membuka halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Alamat setelah berhasil login */}
        <Route path="/beranda" element={<Beranda />} />
        
        <Route path="/eksplorasi" element={<Eksplorasi />} />
        
        {/* 👈 2. Tambahkan rute dinamis untuk detail resep di sini */}
        <Route path="/resep/:id" element={<DetailResep />} />

        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </Router>
  );
}

export default App;