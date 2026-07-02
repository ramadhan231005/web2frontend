function AdminResep() {
  const dataResep = [
    { id: 1, judul: 'Rendang Daging Sapi', provinsi: 'Sumatera Barat', kategori: 'Hidangan Utama', status: 'Diterbitkan', tanggal: '12 Okt 2026' },
    { id: 2, judul: 'Coto Makassar', provinsi: 'Sulawesi Selatan', kategori: 'Hidangan Utama', status: 'Diterbitkan', tanggal: '10 Okt 2026' },
    { id: 3, judul: 'Klepon Gula Aren', provinsi: 'Jawa Tengah', kategori: 'Jajanan', status: 'Draf', tanggal: '08 Okt 2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2C1B18]">Manajemen Resep</h1>
          <p className="text-sm text-[#736461] mt-1">Kelola dan perbarui koleksi resep Nusantara.</p>
        </div>
        <button className="bg-[#8A1C14] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#721610] transition">+ Tambah Resep Baru</button>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8DFD8] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#E8DFD8] flex gap-4">
          <input type="text" placeholder="Cari resep..." className="px-4 py-2 bg-[#FDF8F5] border border-[#E8DFD8] rounded-lg text-sm w-1/3 outline-none focus:border-[#8A1C14]" />
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F6EFE9] text-[#736461] text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Judul Resep</th>
              <th className="px-6 py-4 font-semibold">Provinsi</th>
              <th className="px-6 py-4 font-semibold">Kategori</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8DFD8]">
            {dataResep.map((item) => (
              <tr key={item.id} className="hover:bg-[#FDF8F5] transition">
                <td className="px-6 py-4 font-medium text-[#2C1B18]">{item.judul}</td>
                <td className="px-6 py-4 text-[#736461]">{item.provinsi}</td>
                <td className="px-6 py-4 text-[#736461]">{item.kategori}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${item.status === 'Diterbitkan' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#8A1C14] font-bold cursor-pointer">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminResep;