export const student = { name: "David", xp: 120, xpGoal: 500, progress: 65, questsCompleted: 2, questsTotal: 3 } as const;

export const quests = [
  { slug: "the-missing-numbers", number: "01", title: "The Missing Numbers", type: "Aritmetika / angka hilang", status: "Selesai", color: "bg-[#ffcf58]", symbol: "+", description: "Sebuah teka-teki angka menunggu untuk kamu pecahkan di desa matematika.", learning: "Kamu akan berlatih menjumlahkan, mengurangkan, dan menemukan angka yang hilang.", activity: "5 tantangan • sekitar 10 menit" },
  { slug: "the-pizza-problem", number: "02", title: "The Pizza Problem", type: "Pecahan", status: "Sedang berjalan", color: "bg-[#8fd9d1]", symbol: "¼", description: "Bantu para koki membagi pizza dengan adil untuk pesta besar kerajaan.", learning: "Kamu akan belajar mengenali pecahan seperti setengah, sepertiga, dan seperempat.", activity: "6 tantangan • sekitar 12 menit" },
  { slug: "the-unknown-x", number: "03", title: "The Unknown X", type: "Pola / aljabar dasar", status: "Terkunci", color: "bg-[#ffad89]", symbol: "x", description: "Ikuti jejak pola rahasia untuk menemukan siapa yang bersembunyi di balik X.", learning: "Kamu akan mengenali pola dan mencari nilai yang belum diketahui dengan cara sederhana.", activity: "6 tantangan • sekitar 12 menit" },
] as const;
