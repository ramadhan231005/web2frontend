import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import rendangImg from '../assets/rendang.jpg';
import sateImg from '../assets/sate.jpg';
import { FiClock, FiMapPin, FiHeart, FiTrash2 } from 'react-icons/fi';

function Favorit() {
  // Simulasi data resep yang sudah difavoritkan oleh user
  const resepFavorit = [
    { id: 1, nama: 'Rendang Sapi', daerah: 'Sumatera Barat', durasi: '4 Jam', gambar: rendangImg, deskripsi: 'Hidangan daging kaya rasa dengan rempah tradisional.' },
    { id: 2, nama: 'Sate Lilit', daerah: 'Bali', durasi: '45 Menit', gambar: sateImg, deskripsi: 'Daging cincang berbumbu yang dililit di batang serai.' }
  ];

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
          <Link to="/favorit" className="text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1 font-bold">Favorit</Link>
          <Link to="/profil" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Profil</Link>
        </div>
        <div className="w-9 h-9 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center cursor-pointer overflow-hidden">
          <span className="text-xs text-neutral-600 font-semibold">U</span>
        </div>
      </nav>

      {/* CONTAINER UTAMA */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#2C1B18]">Resep Favorit Kamu</h1>
          <p className="text-xs md:text-sm text-[#736461] font-sans mt-0.5">Daftar warisan kuliner yang paling kamu sukai.</p>
        </div>

        {resepFavorit.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {resepFavorit.map((item) => {
              const resepSlug = item.nama.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={item.id} className="relative group">
                  <Link 
                    to={`/resep/${resepSlug}`}
                    className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden block hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-44 bg-gray-100 overflow-hidden">
                      <img src={item.gambar} alt={item.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 tracking-wide uppercase">
                        <FiMapPin size={12} className="text-orange-400" />
                        {item.daerah}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between min-h-[160px]">
                      <div>
                        <h3 className="text-md font-bold text-[#2C1B18] font-serif mb-1.5 group-hover:text-[#8A1C14] transition-colors">{item.nama}</h3>
                        <p className="text-xs text-[#736461] font-sans leading-relaxed line-clamp-2">{item.deskripsi}</p>
                      </div>
                      <div className="flex justify-between items-center pt-3 mt-2 border-t border-neutral-50 text-neutral-400">
                        <div className="flex items-center gap-1.5 text-xs font-sans text-[#736461]">
                          <FiClock size={14} />
                          {item.durasi}
                        </div>
                        {/* Tombol Hapus Sementara */}
                        <button 
                          className="text-neutral-300 hover:text-red-500 transition-colors p-1"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(`Hapus dari favorit: ${item.nama}`);
                          }}
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white text-center p-12 rounded-3xl border border-neutral-100 shadow-sm max-w-md mx-auto">
            <FiHeart size={32} className="text-neutral-300 mx-auto mb-3" />
            <h3 className="text-md font-bold text-[#2C1B18] font-serif mb-1">Belum Ada Favorit</h3>
            <p className="text-xs text-[#736461] mb-4">Jelajahi resep dan ketuk ikon hati untuk menyimpannya di sini.</p>
            <Link to="/eksplorasi" className="bg-[#8A1C14] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#721610] transition-colors">Cari Resep</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorit;