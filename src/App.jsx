import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Beranda from './pages/Beranda';
import Eksplorasi from './pages/Eksplorasi';
import DetailResep from './pages/DetailResep'; 
import Favorit from './pages/Favorit'; // 👈 1. Tambah import Favorit
import Profil from './pages/Profil';   // 👈 2. Tambah import Profil

function App() {
  return (
    <Router>
      <Routes>
        {/* Alamat utama langsung membuka halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Alamat setelah berhasil login */}
        <Route path="/beranda" element={<Beranda />} />
        
        <Route path="/eksplorasi" element={<Eksplorasi />} />
        
        {/* Rute dinamis untuk detail resep */}
        <Route path="/resep/:id" element={<DetailResep />} />

        {/* 👈 3. Tambahkan rute Favorit dan Profil di bawah ini */}
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/profil" element={<Profil />} />

        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </Router>
  );
}

export default App;