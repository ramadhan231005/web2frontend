import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import {FiMail, FiMapPin, FiAward, FiLogOut } from 'react-icons/fi';

function Profil() {
  // Simulasi data pengguna
  const user = {
    nama: 'Bisri Syahrul R.',
    email: 'bisri.syahrul@example.com',
    asal: 'Makassar, Sulawesi Selatan',
    peran: 'Pencinta Kuliner Nusantara',
    bergabung: 'Juli 2026'
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] antialiased text-[#2C1B18]">
      {/* NAVBAR */}
      <nav className="bg-[#FDF8F5] border-b border-neutral-100 sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/beranda">
            <img src={logoImg} alt="Logo Khas Nusantara" className="h-10 w-auto object-contain" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <Link to="/beranda" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Beranda</Link>
          <Link to="/eksplorasi" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Eksplorasi</Link>
          <Link to="/favorit" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Favorit</Link>
          <Link to="/profil" className="text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1 font-bold">Profil</Link>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#8A1C14] border border-neutral-300 flex items-center justify-center overflow-hidden">
          <span className="text-xs text-white font-semibold">B</span>
        </div>
      </nav>

      {/* CONTAINER UTAMA */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm overflow-hidden">
          
          {/* Header Profil (Aksen Warna) */}
          <div className="h-32 bg-[#8A1C14]/10 relative">
            {/* Foto Profil Melayang */}
            <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-3xl bg-[#8A1C14] border-4 border-white shadow-md flex items-center justify-center">
              <span className="text-3xl text-white font-serif font-bold">B</span>
            </div>
          </div>

          {/* Konten Detail Pengguna */}
          <div className="pt-16 p-8 space-y-6">
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#2C1B18]">{user.nama}</h1>
              <p className="text-sm text-[#736461] font-sans flex items-center gap-1.5 mt-0.5">
                <FiAward className="text-[#8A1C14]" /> {user.peran}
              </p>
            </div>

            <hr className="border-neutral-100" />

            {/* Informasi Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm">
              <div className="flex items-center gap-3 bg-[#FDF8F5] p-4 rounded-2xl border border-neutral-50">
                <FiMail className="text-[#736461]" size={18} />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Email</p>
                  <p className="text-[#2C1B18] font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#FDF8F5] p-4 rounded-2xl border border-neutral-50">
                <FiMapPin className="text-[#736461]" size={18} />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Lokasi</p>
                  <p className="text-[#2C1B18] font-medium">{user.asal}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center text-xs text-neutral-400 font-sans">
              <p>Bergabung sejak: {user.bergabung}</p>
              <button className="flex items-center gap-1.5 text-neutral-500 hover:text-red-600 font-semibold transition-colors">
                <FiLogOut /> Keluar Akun
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;