import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import Halaman Pengguna Biasa
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Beranda from './pages/Beranda';
import Eksplorasi from './pages/Eksplorasi';
import DetailResep from './pages/DetailResep'; 
import Favorit from './pages/Favorit';
import Profil from './pages/Profil';

// 2. Import Halaman Admin
import AdminLayout from './pages/admin/admin/AdminLayout';
import AdminDashboard from './pages/admin/admin/AdminDashboard';
import AdminResep from './pages/admin/admin/AdminResep';
import AdminPengguna from './pages/admin/admin/AdminPengguna';
import AdminWilayah from './pages/admin/admin/AdminWilayah';

function App() {
  return (
    <Router>
      <Routes>
        {/* ==============================
            RUTE PENGGUNA BIASA (USER)
            ============================== */}
        {/* Alamat utama langsung membuka halaman Login */}
        <Route path="/" element={<Login />} />
        
        {/* Alamat setelah berhasil login */}
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/eksplorasi" element={<Eksplorasi />} />
        
        {/* Rute dinamis untuk detail resep */}
        <Route path="/resep/:id" element={<DetailResep />} />
        
        {/* Rute Favorit dan Profil */}
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/daftar" element={<Daftar />} />

        {/* ==============================
            RUTE KHUSUS ADMIN
            ============================== */}
        {/* Semua halaman admin akan dibungkus oleh AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="resep" element={<AdminResep />} />
          <Route path="pengguna" element={<AdminPengguna />} />
          <Route path="wilayah" element={<AdminWilayah />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;