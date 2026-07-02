import { Link, Outlet, useLocation } from 'react-router-dom';
import logoImg from '../../../assets/logo.png';

function AdminLayout() {
  const location = useLocation();

  // Fungsi kecil untuk mengecek menu mana yang sedang aktif
  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-[#FDF8F5] antialiased text-[#2C1B18] font-sans flex flex-col">
      {/* NAVBAR ADMIN */}
      <nav className="bg-[#FDF8F5] border-b border-[#E8DFD8] sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="h-8 w-auto object-contain" />
            <span className="text-xs font-bold text-[#8A1C14] tracking-widest uppercase bg-[#8A1C14]/10 px-2 py-1 rounded">Admin</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/admin/dashboard" className={`${isActive('/dashboard') ? 'text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1' : 'text-[#736461] hover:text-[#8A1C14]'}`}>Dasbor</Link>
          <Link to="/admin/resep" className={`${isActive('/resep') ? 'text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1' : 'text-[#736461] hover:text-[#8A1C14]'}`}>Manajemen Resep</Link>
          <Link to="/admin/pengguna" className={`${isActive('/pengguna') ? 'text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1' : 'text-[#736461] hover:text-[#8A1C14]'}`}>Pengguna</Link>
          <Link to="/admin/wilayah" className={`${isActive('/wilayah') ? 'text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1' : 'text-[#736461] hover:text-[#8A1C14]'}`}>Wilayah</Link>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#8A1C14] text-white flex items-center justify-center font-bold text-xs">
          A
        </div>
      </nav>

      {/* KONTEN HALAMAN (Berubah-ubah sesuai rute) */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 md:px-8 py-8">
        <Outlet /> 
      </main>

      {/* FOOTER ADMIN */}
      <footer className="border-t border-[#E8DFD8] py-6 px-12 text-xs text-[#736461] flex justify-between">
        <p>© 2026 Khas Nusantara. Panel Admin.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#8A1C14]">Bantuan</a>
          <a href="#" className="hover:text-[#8A1C14]">Keamanan</a>
        </div>
      </footer>
    </div>
  );
}

export default AdminLayout;