import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import foodImg from '../assets/Food.jpg';

// 1. Tambahkan import untuk Google Login & Icon
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc'; 

function Login() {
  const navigate = useNavigate();

  // 2. Handler Google Login (Arahkan ke /beranda)
  const loginDenganGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Login Berhasil, Token:', tokenResponse);
      navigate('/beranda'); // 👈 Diubah ke /beranda
    },
    onError: () => {
      alert('Login Gagal, silakan coba lagi.');
    },
  });

  // 3. Handler Form Email biasa (Arahkan ke /beranda)
  const handleEmailLogin = (e) => {
    e.preventDefault();
    navigate('/beranda'); // 👈 Diubah ke /beranda
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] flex items-center justify-center p-4 antialiased font-sans">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row min-h-[550px]">
        
        {/* SISI KIRI */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-[#FDF8F5] md:bg-white">
          <div>
            <img src={logoImg} alt="Logo Khas Nusantara" className="h-14 w-auto mb-8 object-contain" />
            <h1 className="text-3xl font-bold text-[#2C1B18] tracking-tight mb-2">Selamat datang kembali</h1>
            <p className="text-sm text-[#736461] leading-relaxed mb-8">Masuk untuk terus menjelajahi kekayaan warisan seni kuliner Indonesia.</p>
            
            <form className="space-y-5" onSubmit={handleEmailLogin}>
              <div>
                <label className="block text-xs font-semibold text-[#2C1B18] uppercase tracking-wider mb-2">Alamat Email</label>
                <input type="email" required placeholder="anda@contoh.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C14]" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C1B18] uppercase tracking-wider mb-2">Kata Sandi</label>
                <input type="password" required placeholder="********" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1C14]" />
              </div>

              <button type="submit" className="w-full py-3 bg-[#8A1C14] text-white font-semibold rounded-xl shadow-lg hover:bg-[#721610] transition-colors text-sm mt-4">
                Masuk
              </button>

              {/* Garis Pembatas */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs">atau</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Tombol Login Google */}
              <button
                type="button"
                onClick={() => loginDenganGoogle()}
                className="w-full py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl shadow-sm hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-3 text-sm"
              >
                <FcGoogle size={20} />
                Masuk dengan Google
              </button>
            </form>
          </div>

          <div className="text-center text-xs text-[#736461] mt-8">
            Belum punya akun? <Link to="/daftar" className="font-bold text-[#8A1C14] hover:underline">Daftar</Link>
          </div>
        </div>

        {/* SISI KANAN */}
        <div className="hidden md:block md:w-1/2 relative bg-gray-100">
          <img src={foodImg} alt="Kuliner Nusantara" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </div>
  );
}

export default Login;