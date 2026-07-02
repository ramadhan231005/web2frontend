function AdminWilayah() {
  const dataWilayah = [
    { id: 1, nama: 'Sumatera Barat', deskripsi: 'Terkenal dengan bumbu rempah yang kuat dan santan yang kental.' },
    { id: 2, nama: 'Jawa Tengah', deskripsi: 'Karakteristik kulinernya cenderung manis dan tidak terlalu pedas.' },
    { id: 3, nama: 'Sulawesi Selatan', deskripsi: 'Kaya akan hidangan laut segar dan sup berkuah kental berbahan dasar daging.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2C1B18]">Kelola Eksplorasi Provinsi</h1>
          <p className="text-sm text-[#736461] mt-1">Atur sorotan kuliner dan deskripsi untuk setiap provinsi.</p>
        </div>
        <button className="bg-[#8A1C14] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#721610] transition">+ Tambah Provinsi</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dataWilayah.map((wilayah) => (
          <div key={wilayah.id} className="bg-white p-5 rounded-2xl border border-[#E8DFD8] shadow-sm hover:shadow-md transition">
            <div className="h-32 bg-gray-200 rounded-xl mb-4"></div> {/* Placeholder Gambar */}
            <h3 className="text-lg font-serif font-bold text-[#2C1B18] mb-2">{wilayah.nama}</h3>
            <p className="text-xs text-[#736461] line-clamp-3 leading-relaxed">{wilayah.deskripsi}</p>
            <div className="mt-4 pt-4 border-t border-[#E8DFD8] flex justify-end">
              <button className="text-sm font-semibold text-[#8A1C14]">Edit Data</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminWilayah;