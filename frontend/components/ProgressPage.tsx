import Link from "next/link";
import { quests, student } from "../lib/mock-data";

function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-[#d7e6ed]" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-[#f4aa32]" style={{ width: `${value}%` }} />
    </div>
  );
}

function Kibo() {
  return <div className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-[#17345d] bg-[#7dd8d1] text-3xl shadow-[0_4px_0_#4ba9ad]" role="img" aria-label="Kibo">✦</div>;
}

const badges = [
  ["🏆", "First Quest", "Quest pertama selesai"],
  ["⭐", "Math Explorer", "Mulai menjelajahi Math Kingdom"],
  ["🍕", "Fraction Rookie", "Menaklukkan tantangan pecahan"],
] as const;

export default function ProgressPage() {
  const xpPercent = Math.round((student.xp / student.xpGoal) * 100);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#17345d]">
      <main className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pt-10 lg:px-10">
        <header className="relative overflow-hidden rounded-[30px] border-2 border-[#17345d] bg-[#dff3ef] p-6 shadow-[8px_8px_0_#17345d] sm:p-9">
          <div className="absolute -right-12 -top-16 size-48 rounded-full border-[22px] border-[#ffce4a]/60" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="grid size-20 shrink-0 place-items-center rounded-[26px] border-2 border-[#17345d] bg-[#ffb86b] text-4xl font-black shadow-[0_5px_0_#d98b1d]" aria-label={`${student.name} avatar`} role="img">{student.name[0]}</div>
              <div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#26858b]">Profil petualang</p><h1 className="mt-1 text-3xl font-black sm:text-5xl">{student.name}</h1><p className="mt-1 font-extrabold text-[#365477]">Math Explorer · Level 3</p></div>
            </div>
            <div className="min-w-0 rounded-2xl border-2 border-[#17345d] bg-white p-4 shadow-[4px_4px_0_#17345d] sm:w-64"><div className="flex justify-between text-sm font-black"><span>Level 3</span><span>{student.xp} / {student.xpGoal} XP</span></div><ProgressBar value={xpPercent} label="XP menuju level berikutnya" /><p className="mt-2 text-xs font-bold text-[#617692]">Terus kumpulkan XP, ya!</p></div>
          </div>
        </header>

        <section className="mt-12 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#26858b]">Perjalanan belajar</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Math Kingdom</h2><div className="mt-6 space-y-4">{quests.map((quest, index) => <article key={quest.slug} className="flex gap-4 rounded-[24px] border-2 border-[#17345d] bg-white p-4 shadow-[5px_5px_0_#8fd9d1] sm:items-center sm:p-5"><div className={`grid size-12 shrink-0 place-items-center rounded-2xl ${quest.color} text-xl font-black`}>{quest.symbol}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-black sm:text-lg">{quest.title}</h3><span className="rounded-full bg-[#eef8f7] px-3 py-1 text-xs font-black">{quest.status}</span></div><p className="mt-1 text-sm font-bold text-[#617692]">{quest.type}</p>{index < 2 && <div className="mt-3 max-w-sm"><ProgressBar value={index === 0 ? 100 : 45} label={`${quest.title} progress`} /></div>}</div></article>)}</div></div>
          <aside className="rounded-[28px] border-2 border-[#17345d] bg-[#fff4cf] p-6 shadow-[6px_6px_0_#f0ae37] sm:p-7"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a66e14]">Kibo menyemangati</p><div className="mt-5 flex items-center gap-4"><Kibo /><p className="text-sm font-bold leading-6 text-[#365477]">Teruskan petualanganmu! Sedikit demi sedikit, kamu semakin jago matematika.</p></div><div className="mt-6 grid grid-cols-3 gap-2 text-center"><div><p className="text-2xl font-black">{student.xp}</p><p className="text-xs font-bold text-[#617692]">XP</p></div><div className="border-x border-[#e8d89e]"><p className="text-2xl font-black">{student.questsCompleted}</p><p className="text-xs font-bold text-[#617692]">Quest</p></div><div><p className="text-2xl font-black">{student.progress}%</p><p className="text-xs font-bold text-[#617692]">Progress</p></div></div></aside>
        </section>

        <section className="mt-12"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#ef9e27]">Koleksi pencapaian</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Badge Saya</h2><div className="mt-6 grid gap-4 sm:grid-cols-3">{badges.map(([icon, title, description]) => <article key={title} className="rounded-[22px] border-2 border-[#17345d] bg-white p-5 shadow-[5px_5px_0_#17345d]"><div className="text-4xl" aria-hidden="true">{icon}</div><h3 className="mt-4 font-black">{title}</h3><p className="mt-1 text-sm font-bold leading-5 text-[#617692]">{description}</p></article>)}</div></section>

        <nav className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/math-kingdom" className="rounded-2xl border-2 border-[#17345d] bg-[#f4aa32] px-6 py-4 text-center font-black shadow-[0_4px_0_#d98b1d]">Lanjutkan Belajar <span aria-hidden="true">→</span></Link><Link href="/dashboard" className="rounded-2xl border-2 border-[#17345d] bg-white px-6 py-4 text-center font-black shadow-[0_4px_0_#17345d]">Kembali ke Dashboard</Link></nav>
      </main>
    </div>
  );
}
