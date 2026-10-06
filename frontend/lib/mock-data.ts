export const student = {
  name: "David",
  xp: 120,
  xpGoal: 500,
  progress: 65,
  questsCompleted: 2,
  questsTotal: 3,
} as const;

export const quests = [
  { number: "01", title: "The Missing Numbers", type: "Aritmetika / angka hilang", status: "Selesai", color: "bg-[#ffcf58]", symbol: "＋" },
  { number: "02", title: "The Pizza Problem", type: "Pecahan", status: "Sedang berjalan", color: "bg-[#8fd9d1]", symbol: "¼" },
  { number: "03", title: "The Unknown X", type: "Pola / aljabar dasar", status: "Terkunci", color: "bg-[#ffad89]", symbol: "x" },
] as const;
