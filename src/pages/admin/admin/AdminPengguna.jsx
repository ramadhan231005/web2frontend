function AdminPengguna() {
  const dataUser = [
    { id: 1, nama: 'Siti Rahmawati', email: 'siti@example.com', peran: 'Admin', status: 'Aktif' },
    { id: 2, nama: 'Budi Santoso', email: 'budi@example.com', peran: 'User', status: 'Aktif' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#2C1B18]">Manajemen Pengguna</h1>
          <p className="text-sm text-[#736461] mt-1">Kelola akses, peran, dan status pengguna platform.</p>
        </div>
        <button className="bg-[#8A1C14] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#721610] transition">+ Tambah Pengguna</button>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8DFD8] overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F6EFE9] text-[#736461] text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Pengguna</th>
              <th className="px-6 py-4 font-semibold">Peran</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8DFD8]">
            {dataUser.map((user) => (
              <tr key={user.id} className="hover:bg-[#FDF8F5] transition">
                <td className="px-6 py-4">
                  <p className="font-medium text-[#2C1B18]">{user.nama}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </td>
                <td className="px-6 py-4 font-semibold text-[#736461]">{user.peran}</td>
                <td className="px-6 py-4 text-green-600 font-semibold">{user.status}</td>
                <td className="px-6 py-4 text-[#8A1C14] font-bold cursor-pointer">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPengguna;