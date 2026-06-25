import { useParams, Link } from 'react-router-dom';
import logoImg from '../assets/logo.png'; 

function DetailResep() {
  // useParams berfungsi mengambil "nasi-liwet" dari URL /resep/nasi-liwet
  const { id } = useParams(); 

  return (
    <div className="min-h-screen bg-[#FDF8F5] antialiased text-[#2C1B18]">
      {/* Kamu bisa pasang Navbar di sini */}
      <nav className="bg-[#8A1C14] text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <img src={logoImg} alt="Logo" className="h-10 mr-4" />
          <Link to="/" className="text-lg font-bold hover:underline">
            Resepku
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4">
          ID Resep yang diakses: <span className="font-bold text-[#8A1C14]">{id}</span>
        </p>

        {/* DI SINI TEMPAT KAMU NGODING LAYOUT YANG ADA DI GAMBAR:
           1. Hero Image Nasi Liwet dengan Card melayang di atasnya
           2. Info bar (30 mins, 1 hr 15 mins, dll)
           3. Grid 2 Kolom: Sisi kiri (The Heritage & Step) dan Sisi kanan (Ingredients)
        */}
        <h1 className="text-3xl font-bold">Halaman Detail {id} sedang disiapkan</h1>
      </div>
    </div>
  );
}

export default DetailResep;