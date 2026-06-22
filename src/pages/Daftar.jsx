import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import FoodBg from '../assets/Food.jpg';
import { FiUser, FiMail, FiLock, FiShield } from 'react-icons/fi';

// =================== 1. TAMBAHKAN IMPOR GOOGLE DI SINI ===================
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
// =========================================================================

function Daftar() {
  
  // ================= 2. TAMBAHKAN FUNGSI HANDLER DI SINI =================
  const daftarDenganGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Registrasi Google Berhasil, Token:', tokenResponse);
      alert('Pendaftaran dengan Google Berhasil!');
    },
    onError: () => {
      console.log('Registrasi Google Gagal');
      alert('Pendaftaran Gagal, silakan coba lagi.');
    },
  });
  // =============================================================================

  return (
    <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center p-4 antialiased">
      {/* Container Utama (Card Split Screen) */}
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* SISI KIRI: Formulir */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-[#FDF8F5] md:bg-white justify-between">
          <div>
            {/* Logo Khas Nusantara */}
            <img src={logoImg} alt="Logo Khas Nusantara" className="h-10 w-auto mb-8 object-contain" />
            
            {/* Judul & Teks */}
            <h1 className="text-3xl font-bold text-[#2C1B18] tracking-tight mb-2 font-serif">
              Bergabunglah dengan Kami
            </h1>
            <p className="text-sm text-[#736461] leading-relaxed mb-8 font-sans">
              Mulai petualangan kuliner Anda dan simpan resep warisan favorit.
            </p>
            
            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Input Nama Lengkap */}
              <div>
                <label className="block text-xs font-semibold text-[#2C1B18] uppercase tracking-wider mb-2 font-sans">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                    <FiUser size={18} />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Budi Santoso" 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C14] focus:border-transparent transition-all font-sans"
                  />
                </div>
              </div>

              {/* Input Alamat Email */}
              <div>
                <label className="block text-xs font-semibold text-[#2C1B18] uppercase tracking-wider mb-2 font-sans">
                  Alamat Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                    <FiMail size={18} />
                  </span>
                  <input 
                    type="email" 
                    placeholder="contoh@email.com" 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C14] focus:border-transparent transition-all font-sans"
                  />
                </div>
              </div>

              {/* Input Kata Sandi */}
              <div>
                <label className="block text-xs font-semibold text-[#2C1B18] uppercase tracking-wider mb-2 font-sans">
                  Kata Sandi
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                    <FiLock size={18} />
                  </span>
                  <input 
                    type="password" 
                    placeholder="********" 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C14] focus:border-transparent transition-all font-sans"
                  />
                </div>
              </div>

              {/* Input Konfirmasi Kata Sandi */}
              <div>
                <label className="block text-xs font-semibold text-[#2C1B18] uppercase tracking-wider mb-2 font-sans">
                  Konfirmasi Kata Sandi
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
                    <FiShield size={18} />
                  </span>
                  <input 
                    type="password" 
                    placeholder="********" 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C14] focus:border-transparent transition-all font-sans"
                  />
                </div>
              </div>

              {/* Tombol Daftar Sekarang (Maroon) */}
              <button 
                type="submit" 
                className="w-full py-3 bg-[#8A1C14] text-white font-bold rounded-xl shadow-lg shadow-red-900/10 hover:bg-[#721610] transition-colors duration-200 text-sm mt-2 uppercase tracking-wider"
              >
                Daftar Sekarang
              </button>

              {/* === 3. GARIS PEMBATAS 'atau' DAN TOMBOL GOOGLE DI SINI === */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs">atau</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <button
                type="button"
                onClick={() => daftarDenganGoogle()}
                className="w-full py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl shadow-sm hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3 text-sm font-sans"
              >
                <FcGoogle size={20} />
                Daftar dengan Google
              </button>
              {/* =============================================================== */}

            </form>
          </div>

          {/* Footer Sudah Punya Akun */}
          <div className="text-center text-xs text-[#736461] mt-8 font-sans">
            Sudah punya akun? <Link to="/login" className="font-bold text-[#8A1C14] hover:underline">Masuk</Link>
            </div>
        </div>

        {/* SISI KANAN: Banner Foto Makanan & Testimoni */}
        <div className="hidden md:block md:w-1/2 relative bg-neutral-100">
          <img 
            src={FoodBg} 
            alt="Kuliner Nusantara" 
            className="absolute inset-0 w-full h-full object-cover rounded-r-3xl"
          />
          {/* Kartu Testimoni Melayang */}
          <div className="absolute bottom-10 right-10 bg-white p-6 shadow-2xl rounded-2xl max-w-xs border border-neutral-100 transform translate-y-4">
            <p className="quote text-[#8A1C14] font-serif italic text-base leading-relaxed">
              "Cita rasa asli, warisan abadi dari generasi ke generasi."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Daftar;