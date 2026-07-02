function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2C1B18]">Tinjauan Dasbor</h1>
          <p className="text-sm text-[#736461] mt-1">Pantau pertumbuhan kuliner, keterlibatan komunitas, dan kontribusi terbaru.</p>
        </div>
        <button className="bg-[#8A1C14] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#721610] transition">+ Buat Pengumuman</button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F6EFE9] p-6 rounded-2xl border border-[#E8DFD8]">
          <p className="text-xs font-bold text-[#736461] uppercase tracking-wider mb-2">Total Resep</p>
          <p className="text-4xl font-serif font-bold text-[#2C1B18]">3,492</p>
        </div>
        <div className="bg-[#F6EFE9] p-6 rounded-2xl border border-[#E8DFD8]">
          <p className="text-xs font-bold text-[#736461] uppercase tracking-wider mb-2">Pengguna Aktif</p>
          <p className="text-4xl font-serif font-bold text-[#2C1B18]">12.8K</p>
        </div>
        <div className="bg-[#F6EFE9] p-6 rounded-2xl border border-[#E8DFD8]">
          <p className="text-xs font-bold text-[#736461] uppercase tracking-wider mb-2">Provinsi Tercakup</p>
          <p className="text-4xl font-serif font-bold text-[#2C1B18]">38</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;