
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

// Import aset gambar wilayah
import baliImg from '../assets/bali.jpg';
import jatengImg from '../assets/Borobudur.jpg';
import sumbarImg from '../assets/rumahrendang.jpg';
import diyImg from '../assets/prambanan.jpg';
import sulselImg from '../assets/kuba.jpg';

import { FiChevronDown } from 'react-icons/fi';

function Eksplorasi() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] antialiased text-[#2C1B18]">
      
      {/* 1. NAVBAR */}
      <nav className="bg-[#FDF8F5] px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logoImg} alt="Logo Khas Nusantara" className="h-8 w-auto object-contain" />
          </Link>
        </div>
        
        {/* Menu Tengah */}
        <div className="hidden md:flex items-center gap-8 font-sans text-xs font-medium tracking-wide">
          <Link to="/beranda" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Beranda</Link>
          <Link to="/eksplorasi" className="text-[#8A1C14] border-b-2 border-[#8A1C14] pb-1 font-bold">Eksplorasi</Link>
          <a href="#" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Favorit</a>
          <a href="#" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Profil</a>
        </div>

        {/* Akun Kanan */}
        <div className="w-8 h-8 rounded-full bg-[#F5EFEA] border border-neutral-200 flex items-center justify-center cursor-pointer">
          <span className="text-[10px] text-[#8A1C14] font-bold">B</span>
        </div>
      </nav>

      {/* 2. HEADER TITLE & FILTER */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-[#8A1C14] font-serif mb-2 tracking-tight">
              Eksplorasi Provinsi
            </h1>
            <p className="text-xs text-[#736461] font-sans leading-relaxed">
              Temukan kekayaan permadani kuliner Indonesia, dikategorikan berdasarkan wilayah. 
              Setiap provinsi menawarkan perpaduan unik dari rempah-rempah, tradisi, dan warisan.
            </p>
          </div>
          
          {/* Tombol Dropdown Semua Wilayah */}
          <button className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-[10px] font-bold text-[#736461] shadow-sm hover:bg-neutral-50 transition-colors self-start md:self-auto">
            <span className="text-amber-600">▼</span> Semua Wilayah <FiChevronDown size={12} className="text-neutral-400" />
          </button>
        </div>
      </div>

      {/* 3. BENTO GRID SECTION (BALI, JATENG, SUMBAR) */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Kartu Besar Kiri: Bali */}
          <div className="relative md:col-span-2 h-[350px] rounded-2xl overflow-hidden group shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <img 
              src={baliImg} 
              alt="Bali" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6 z-10">
              <span className="self-start bg-amber-500/20 text-amber-300 text-[9px] font-bold px-2 py-1 rounded tracking-wider uppercase backdrop-blur-sm">
                Wilayah Unggulan
              </span>
              <div className="flex justify-between items-end text-white">
                <div>
                  <h2 className="text-2xl font-bold font-serif">Bali</h2>
                  <p className="text-[10px] text-white/80 font-sans">142 Resep Otentik</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#8A1C14] transition-all">
                  ➔
                </button>
              </div>
            </div>
          </div>

          {/* Kolom Kanan Bento: Dua Kartu Vertikal */}
          <div className="flex flex-col gap-5 h-[350px]">
            
            {/* Jawa Tengah */}
            <div className="relative flex-1 rounded-2xl overflow-hidden group shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <img 
                src={jatengImg} 
                alt="Jawa Tengah" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 z-10">
                <h2 className="text-lg font-bold text-white font-serif">Jawa Tengah</h2>
                <p className="text-[10px] text-white/70 font-sans">Pusat Rempah Jawa</p>
              </div>
            </div>

            {/* Sumatera Barat */}
            <div className="relative flex-1 rounded-2xl overflow-hidden group shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <img 
                src={sumbarImg} 
                alt="Sumatera Barat" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 z-10">
                <h2 className="text-lg font-bold text-white font-serif">Sumatera Barat</h2>
                <p className="text-[10px] text-white/70 font-sans">Ranah Rendang</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. LOWER GRID SECTION (DI YOGYAKARTA & SULAWESI SELATAN) */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* DI Yogyakarta (Gambar Kiri, Teks Kanan) */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden flex h-[180px] group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-[35%] relative h-full overflow-hidden">
              <img 
                src={diyImg} 
                alt="DI Yogyakarta" 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            </div>
            <div className="w-[65%] p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#8A1C14] font-serif mb-1 transition-colors group-hover:text-[#721610]">DI Yogyakarta</h3>
                <p className="text-[10px] leading-relaxed text-[#736461] font-sans line-clamp-3">
                  Daerah istimewa di mana tradisi kerajaan berpadu dengan budaya kuliner legendaris yang manis dan bersahaja.
                </p>
              </div>
              <div>
                <span className="text-[9px] font-bold text-[#A88C52] tracking-wider group-hover:underline">
                  EKSPLORASI WILAYAH ➔
                </span>
              </div>
            </div>
          </div>

          {/* Sulawesi Selatan (Teks Kiri, Gambar Kanan) */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden flex h-[180px] group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-[65%] p-5 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-lg font-bold text-[#8A1C14] font-serif mb-1 transition-colors group-hover:text-[#721610]">Sulawesi Selatan</h3>
                <p className="text-[10px] leading-relaxed text-[#736461] font-sans line-clamp-3">
                  Terkenal dengan cita rasa pesisir yang kuat dan sup gelap yang kaya akan rempah-rempah pilihan nusantara.
                </p>
              </div>
              <div>
                <span className="text-[9px] font-bold text-[#A88C52] tracking-wider group-hover:underline">
                  EKSPLORASI WILAYAH ➔
                </span>
              </div>
            </div>
            <div className="w-[35%] relative h-full order-1 lg:order-2 overflow-hidden">
              <img 
                src={sulselImg} 
                alt="Sulawesi Selatan" 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* 5. TOMBOL LIHAT SEMUA PROVINSI */}
      <div className="flex justify-center pt-8 pb-12">
        <button className="bg-[#8A1C14] hover:bg-[#721610] text-white text-[10px] font-bold px-8 py-2.5 rounded-full transition-all hover:scale-105 shadow-sm tracking-wide">
          Lihat Semua 38 Provinsi
        </button>
      </div>

      {/* 6. FOOTER */}
      <footer className="bg-[#EFE7E0] px-6 md:px-12 py-8 text-[11px] font-sans text-[#736461]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="max-w-xs">
            <span className="font-serif font-bold text-sm text-[#8A1C14] block mb-1">Khas Nusantara</span>
            <p className="leading-relaxed text-neutral-500">
              Merayakan Warisan Kuliner Indonesia. Temukan cita rasa otentik dari Sabang hingga Merauke.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-[#2C1B18] mb-0.5">Platform</span>
              <a href="#" className="hover:text-[#8A1C14]">Tentang Kami</a>
              <a href="#" className="hover:text-[#8A1C14]">Hubungi Dukungan</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-[#2C1B18] mb-0.5">Legal</span>
              <a href="#" className="hover:text-[#8A1C14]">Syarat Ketentuan</a>
              <a href="#" className="hover:text-[#8A1C14]">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Eksplorasi;