import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import foodImg from '../assets/Food.jpg'; // Menggunakan banner figma kamu
import rendangImg from '../assets/rendang.jpg'; // Menggunakan gambar rendang asli
import sotobetawiImg from '../assets/sotobetawi.jpg'; // Menggunakan gambar soto betawi asli
import sateImg from '../assets/sate.jpg'; // Menggunakan gambar sate lilit asli
import { FiSearch, FiHeart, FiClock, FiMapPin } from 'react-icons/fi';

function Beranda() {
  // Data resep simulasi agar persis seperti di desain Figma kamu
  const hidanganPopuler = [
    {
      id: 1,
      nama: 'Rendang Sapi',
      daerah: 'Sumatera Barat',
      deskripsi: 'Hidangan daging kaya rasa yang dimasak perlahan dalam santan dan campuran rempah tradisional yang kompleks.',
      durasi: '4 Jam',
      gambar: rendangImg // Kamu bisa mengganti dengan gambar spesifik nanti
    },
    {
      id: 2,
      nama: 'Sate Lilit',
      daerah: 'Bali',
      deskripsi: 'Makanan laut atau daging cincang yang dicampur dengan kelapa parut, santan kental, perasan jeruk nipis, bawang merah, dan lada.',
      durasi: '45 Menit',
      gambar: sateImg
    },
    {
      id: 3,
      nama: 'Soto Betawi',
      daerah: 'Jakarta',
      deskripsi: 'Sup daging sapi yang hangat dengan kuah unik dari campuran santan, susu sapi, dan rempah aromatik.',
      durasi: '1.5 Jam',
      gambar: sotobetawiImg
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F5] antialiased text-[#2C1B18]">
      
      {/* 1. NAVBAR */}
      <nav className="bg-[#FDF8F5] border-b border-neutral-100 sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImg} alt="Logo Khas Nusantara" className="h-10 w-auto object-contain" />
        </div>
        
        {/* Menu Tengah */}
<div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
  <Link to="/beranda" className="text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1 font-bold">Beranda</Link>
  
  {/* 👇 SEKARANG TOMBOL INI SUDAH AKTIF MENINGGALKAN BERANDA */}
  <Link to="/eksplorasi" className="text-[#736461] hover:text-[#8A1C14] transition-colors">
    Eksplorasi
  </Link>
          <a href="#" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Favorit</a>
          <a href="#" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Profil</a>
        </div>

        {/* Akun Kanan */}
        <div className="w-9 h-9 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center cursor-pointer overflow-hidden">
          <span className="text-xs text-neutral-600 font-semibold">U</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-12">
        
        {/* 2. HERO SECTION */}
        <div className="relative h-[380px] rounded-[2rem] overflow-hidden shadow-lg">
          {/* Gambar Latar Belakang */}
          <img 
            src={foodImg} 
            alt="Temukan Cita Rasa Warisan" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 font-serif">
              Temukan Cita Rasa Warisan
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-sans font-light leading-relaxed mb-8">
              Jelajahi resep otentik yang diturunkan dari generasi ke generasi di seluruh nusantara.
            </p>

            {/* Kotak Pencarian Bulat */}
            <div className="bg-white p-2 rounded-full shadow-xl flex items-center max-w-xl w-full">
              <span className="pl-4 text-gray-400">
                <FiSearch size={20} />
              </span>
              <input 
                type="text" 
                placeholder="Cari resep, bahan, atau daerah..." 
                className="w-full pl-3 pr-4 bg-transparent text-sm font-sans focus:outline-none placeholder-gray-400"
              />
              <button className="bg-[#8A1C14] hover:bg-[#721610] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-200">
                Cari
              </button>
            </div>
          </div>
        </div>

        {/* 3. KONTEN HIDANGAN POPULER */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C1B18] font-serif">
                Hidangan Populer
              </h2>
              <p className="text-xs md:text-sm text-[#736461] font-sans mt-1">
                Pilihan hidangan tradisional yang disukai banyak orang.
              </p>
            </div>
            <a href="#" className="text-sm font-bold text-[#8A1C14] hover:underline flex items-center gap-1">
              Lihat Semua <span className="text-xs">➔</span>
            </a>
          </div>

          {/* Grid Grid Kartu Resep */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hidanganPopuler.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden group hover:shadow-md transition-shadow duration-300">
                
                {/* Bagian Atas Gambar + Badge Daerah */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={item.gambar} 
                    alt={item.nama} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge Lokasi */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 tracking-wide uppercase">
                    <FiMapPin size={12} className="text-orange-400" />
                    {item.daerah}
                  </div>
                </div>

                {/* Konten Kartu */}
                <div className="p-5 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-lg font-bold text-[#2C1B18] font-serif mb-2">
                      {item.nama}
                    </h3>
                    <p className="text-xs text-[#736461] font-sans leading-relaxed line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>

                  {/* Footer Kartu */}
                  <div className="flex justify-between items-center pt-4 mt-2 border-t border-neutral-50 text-neutral-400">
                    <div className="flex items-center gap-1.5 text-xs font-sans text-[#736461]">
                      <FiClock size={14} className="text-neutral-400" />
                      {item.durasi}
                    </div>
                    <button className="text-neutral-300 hover:text-red-500 transition-colors">
                      <FiHeart size={18} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. FOOTER */}
      <footer className="bg-[#F5EFEA] border-t border-neutral-200/60 mt-20 px-6 md:px-12 py-8 text-xs font-sans text-[#736461]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-serif font-bold text-sm text-[#2C1B18] block mb-1">Khas Nusantara</span>
            <p>© 2026 Khas Nusantara. Hak Cipta Dilindungi.</p>
          </div>
          <div className="flex flex-wrap gap-6 font-medium text-neutral-600">
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Tentang Kami</a>
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Syarat Ketentuan</a>
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Hubungi Dukungan</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Beranda;