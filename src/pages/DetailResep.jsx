import { useParams, Link } from 'react-router-dom';
import logoImg from '../assets/logo.png'; 
import rendangImg from '../assets/rendang.jpg'; 
import sotobetawiImg from '../assets/sotobetawi.jpg'; 
import sateImg from '../assets/sate.jpg'; 
import { FiArrowLeft, FiMapPin, FiClock, FiCheck } from 'react-icons/fi';

function DetailResep() {
  const { id } = useParams(); 

  // 1. Data Detail Konten Resep (Dicocokkan berdasarkan slug URL)
  const kumpulanResep = {
    'rendang-sapi': {
      nama: 'Rendang Sapi',
      daerah: 'Sumatera Barat',
      durasi: '4 Jam',
      porsi: '5-6 Porsi',
      gambar: rendangImg,
      warisan: 'Rendang bukan sekadar makanan, melainkan lambang kehormatan dan musyawarah masyarakat Minangkabau. Proses memasak yang memakan waktu jam-jam melambangkan kesabaran, kebijaksanaan, dan ketekunan dalam melestarikan tradisi luhur.',
      bahan: [
        '1 kg daging sapi (potong jadi 20 bagian)',
        '1.000 ml santan kental (dari 3 butir kelapa tua)',
        '1.000 ml santan encer',
        '2 lembar daun kunyit (ikat simpul)',
        '4 lembar daun jeruk purut',
        '2 batang serai (memarkan)',
        'Bumbu halus: 150g bawang merah, 50g bawang putih, 200g cabai merah keriting, 3cm jahe, 3cm lengkuas, 1 sdm ketumbar'
      ],
      langkah: [
        'Rebus santan encer bersama bumbu halus, daun kunyit, daun jeruk, dan serai di atas api sedang sambil terus diaduk agar santan tidak pecah.',
        'Setelah santan mulai mengeluarkan minyak, masukkan potongan daging sapi. Masak hingga daging berubah warna.',
        'Kecilkan api, tuangkan santan kental secara perlahan. Masak kembali sambil diaduk berkala agar bagian bawah tidak gosong.',
        'Teruskan memasak selama 3-4 jam hingga kuah mengering, bumbu berubah menjadi cokelat pekat kehitaman, dan daging terasa sangat empuk.'
      ]
    },
    'sate-lilit': {
      nama: 'Sate Lilit',
      daerah: 'Bali',
      durasi: '45 Menit',
      porsi: '12 Tusuk',
      gambar: sateImg,
      warisan: 'Sate Lilit merupakan hidangan suci tradisional Bali yang merekatkan kebersamaan. Kata "lilit" bermakna ikatan kuat, menggambarkan persatuan masyarakat. Menggunakan batang serai sebagai tusukan memberikan aroma wangi yang khas saat dibakar.',
      bahan: [
        '500 gr daging ayam atau ikan tenggiri cincang',
        '150 gr kelapa parut setengah tua',
        '50 ml santan kental hangat',
        '12 batang serai ukuran sedang (bersihkan sebagai tusukan)',
        '1 sdm air perasan jeruk nipis',
        'Bumbu halus: 8 siung bawang merah, 4 siung bawang putih, 3 buah cabai merah, 2 cm kencur, 2 cm kunyit bakar, 1 sdt terasi bakar'
      ],
      langkah: [
        'Tumis bumbu halus hingga benar-benar harum dan matang, lalu angkat dan biarkan mendingin sejenak.',
        'Dalam wadah besar, campurkan daging cincang, kelapa parut, santan kental, air jeruk nipis, dan tumisan bumbu halus. Aduk rata hingga adonan kalis.',
        'Ambil sekecil kepalan adonan, tempelkan lalu lilitkan mengelilingi bagian ujung atas batang serai hingga padat.',
        'Panggang sate lilit di atas wajan teflon atau panggangan arang sambil dibolak-balik hingga matang merata dan berwarna kuning kecokelatan.'
      ]
    },
    'soto-betawi': {
      nama: 'Soto Betawi',
      daerah: 'Jakarta',
      durasi: '1.5 Jam',
      porsi: '4 Porsi',
      gambar: sotobetawiImg,
      warisan: 'Soto Betawi mencerminkan akulturasi budaya yang kaya di Jakarta. Keunikan kuahnya yang memadukan santan dengan susu cair memberikan sensasi gurih lembut yang membedakannya dari jenis soto lain di Nusantara sejak abad ke-20.',
      bahan: [
        '500 gr daging sapi jatah tetelan / sandung lamur',
        '250 ml susu cair full cream',
        '500 ml santan encer',
        '2 lembar daun salam & 1 batang serai',
        '2 butir cengkeh & 2 cm kayu manis',
        'Bumbu halus: 10 butir bawang merah, 5 siung bawang putih, 4 butir kemiri sangrai, 2 cm jahe, 1 sdt ketumbar bubuk, 1/2 sdt lada bubuk'
      ],
      langkah: [
        'Rebus daging sapi dalam air mendidih hingga empuk. Angkat daging, potong dadu kecil, dan sisakan air kaldunya sekitar 800 ml.',
        'Tumis bumbu halus bersama serai, daun salam, cengkeh, dan kayu manis sampai harum harum.',
        'Masukkan tumisan bumbu ke dalam air rebusan kaldu, disusul dengan menuangkan santan encer dan susu cair. Didihkan perlahan sembari diaduk.',
        'Masukkan kembali potongan daging, bumbui dengan garam dan sedikit gula. Masak dengan api kecil hingga kuah meresap matang. Sajikan dengan emping.'
      ]
    }
  };

  // Mengambil data resep yang sesuai dengan ID URL
  const resep = kumpulanResep[id];

  // 2. Tampilan jika Resep Tidak Ditemukan
  if (!resep) {
    return (
      <div className="min-h-screen bg-[#FDF8F5] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-serif font-bold text-[#2C1B18] mb-2">Resep Tidak Ditemukan</h2>
        <p className="text-sm text-[#736461] mb-6">Maaf, menu resep "{id}" belum tersedia dalam database kami.</p>
        <Link to="/beranda" className="flex items-center gap-2 bg-[#8A1C14] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#721610] transition-colors">
          <FiArrowLeft /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8F5] antialiased text-[#2C1B18]">
      
      {/* NAVBAR (Konsisten dengan Beranda) */}
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
          <Link to="/profil" className="text-[#736461] hover:text-[#8A1C14] transition-colors">Profil</Link>
        </div>
        <div className="w-9 h-9 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center cursor-pointer overflow-hidden">
          <span className="text-xs text-neutral-600 font-semibold">U</span>
        </div>
      </nav>

      {/* UTAMA CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-8">
        
        {/* Tombol Back */}
        <Link to="/beranda" className="inline-flex items-center gap-2 text-sm font-bold text-[#736461] hover:text-[#8A1C14] transition-colors">
          <FiArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        {/* HERO IMAGE SECTION */}
        <div className="relative h-[300px] md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-md">
          <img 
            src={resep.gambar} 
            alt={resep.nama} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Badge Lokasi Melayang di Pojok Kiri Atas */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#2C1B18] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md">
            <FiMapPin className="text-[#8A1C14]" size={14} />
            {resep.daerah}
          </div>
        </div>

        {/* INFO BAR & JUDUL UTAMA */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2C1B18] tracking-tight">
              {resep.nama}
            </h1>
            <p className="text-sm text-[#736461] font-sans mt-1">Kuliner Istimewa khas {resep.daerah}</p>
          </div>
          
          {/* Durasi & Porsi Info */}
          <div className="flex items-center gap-6 text-sm text-[#736461] font-medium bg-[#FDF8F5] p-3 rounded-2xl border border-neutral-100">
            <div className="flex items-center gap-2">
              <FiClock className="text-[#8A1C14]" size={16} />
              <span>{resep.durasi}</span>
            </div>
            <div className="h-4 w-px bg-neutral-200" />
            <div>
              <span>{resep.porsi}</span>
            </div>
          </div>
        </div>

        {/* GRID LAYOUT: KIRI (WARISAN & LANGKAH) & KANAN (BAHAN) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SISI KIRI: Kolom Lebar (2/3 Grid) */}
          <div className="md:col-span-2 space-y-8">
            {/* The Heritage / Cerita Warisan */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-sm space-y-3">
              <h3 className="text-xl font-serif font-bold text-[#2C1B18]">Cerita Warisan</h3>
              <p className="text-sm text-[#736461] font-sans leading-relaxed font-light">
                {resep.warisan}
              </p>
            </div>

            {/* Langkah Memasak */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-[#2C1B18]">Langkah Memasak</h3>
              <div className="space-y-6">
                {resep.langkah.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#8A1C14]/10 text-[#8A1C14] font-bold text-sm flex items-center justify-center font-sans">
                      {index + 1}
                    </div>
                    <p className="text-sm text-[#2C1B18] font-sans leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SISI KANAN: Kolom Bahan-Bahan (1/3 Grid) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-sm h-fit space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#2C1B18]">Bahan-Bahan</h3>
            <ul className="space-y-3.5">
              {resep.bahan.map((bahan, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#736461] font-sans">
                  <span className="mt-0.5 flex-shrink-0 text-emerald-600">
                    <FiCheck size={16} />
                  </span>
                  <span>{bahan}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-[#F5EFEA] border-t border-neutral-200/60 mt-20 px-6 md:px-12 py-8 text-xs font-sans text-[#736461]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-serif font-bold text-sm text-[#2C1B18] block mb-1">Khas Nusantara</span>
            <p>© 2026 Khas Nusantara. Hak Cipta Dilindungi.</p>
          </div>
          <div className="flex flex-wrap gap-6 font-medium text-neutral-600">
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Tentang Kami</a>
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Syarat Ketentuan</a>
            <a href="#" className="hover:text-[#8A1C14] transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default DetailResep;