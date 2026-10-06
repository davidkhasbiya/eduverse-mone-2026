import Link from "next/link";
import { quests } from "../lib/mock-data";

function KiboGuide() {
  return (
    <div className="flex items-center gap-4 rounded-[22px] border-2 border-[#17345d] bg-white p-4 shadow-[5px_5px_0_#17345d]">
      <div className="relative grid size-14 shrink-0 place-items-center rounded-full border-2 border-[#17345d] bg-[#7dd8d1] text-2xl shadow-[0_4px_0_#4ba9ad]" aria-label="Kibo" role="img">
        <span aria-hidden="true">✦</span>
        <span className="absolute left-3 top-5 size-1.5 rounded-full bg-[#17345d]" />
        <span className="absolute right-3 top-5 size-1.5 rounded-full bg-[#17345d]" />
      </div>
      <p className="text-sm font-bold leading-6 text-[#365477]">Kibo: Pilih quest dan mulai petualanganmu!</p>
    </div>
  );
}

function MapLandmark({ className, label, symbol }: { className: string; label: string; symbol: string }) {
  return (
    <div className={`absolute hidden size-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#17345d] bg-[#fff4cf] text-center shadow-[4px_4px_0_#17345d] sm:flex ${className}`}>
      <span className="text-2xl font-black text-[#ef9e27]">{symbol}</span>
      <span className="text-[9px] font-black uppercase tracking-wide">{label}</span>
    </div>
  );
}

export default function MathKingdomPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] px-5 pb-12 pt-20 text-[#17345d] sm:px-8 sm:pt-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/dashboard" className="font-extrabold text-[#26858b] underline decoration-2 underline-offset-4 hover:text-[#17345d] focus:outline-none focus:ring-2 focus:ring-[#26858b]">← Kembali ke Dashboard</Link>
          <span className="rounded-full border-2 border-[#17345d] bg-[#ffcf58] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-[3px_3px_0_#17345d]">World 01</span>
        </div>

        <section className="mt-7 grid gap-7 lg:grid-cols-[1fr_0.38fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#26858b]">Pintu masuk petualangan matematika</p>
            <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-6xl">Math Kingdom</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#365477]">Ini adalah dunia belajar pertamamu. Jelajahi pulau-pulau matematika, selesaikan quest, dan kumpulkan XP sambil melatih cara berpikirmu.</p>
          </div>
          <KiboGuide />
        </section>

        <section className="relative mt-10 overflow-hidden rounded-[30px] border-2 border-[#17345d] bg-[#dff3ef] p-5 shadow-[8px_8px_0_#17345d] sm:p-8" aria-labelledby="map-title">
          <div className="absolute -right-16 -top-16 size-48 rounded-full border-[22px] border-[#ffcf58]/60" />
          <div className="relative z-10 flex items-end justify-between gap-4">
            <div><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#26858b]">Peta petualangan</p><h2 id="map-title" className="mt-1 text-3xl font-black">Pilih tujuanmu</h2></div>
            <span className="hidden rounded-full bg-white/70 px-3 py-1 text-xs font-black sm:block">3 quest tersedia</span>
          </div>

          <div className="relative mt-6 min-h-28 rounded-[24px] border-2 border-dashed border-[#4ba9ad] bg-[#8fd9d1]/45 sm:min-h-44">
            <div className="absolute left-[14%] right-[14%] top-1/2 h-2 -translate-y-1/2 rotate-[-8deg] rounded-full bg-[#f4aa32] opacity-80 sm:block" />
            <MapLandmark className="left-[16%] top-[50%]" label="Start" symbol="★" />
            <MapLandmark className="left-[50%] top-[35%]" label="Quest" symbol="+" />
            <MapLandmark className="left-[84%] top-[68%]" label="Goal" symbol="✦" />
            <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-sm font-black text-[#365477] sm:hidden">Peta quest → pilih salah satu pulau di bawah</p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="quests-title">
          <div className="flex items-end justify-between gap-4"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#26858b]">Destinasi quest</p><h2 id="quests-title" className="mt-1 text-3xl font-black">Tiga tantangan menantimu</h2></div><span className="hidden text-sm font-bold text-[#617692] sm:block">Pilih dan mulai kapan saja</span></div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {quests.map((quest) => {
              const href = quest.number === "01" ? "/quest/the-missing-numbers" : quest.number === "02" ? "/quest/the-pizza-problem" : "/quest/the-unknown-x";
              return <Link href={href} key={quest.number} className={`group relative flex min-h-64 flex-col rounded-[25px] border-2 border-[#17345d] ${quest.color} p-6 shadow-[6px_6px_0_#17345d] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#8fd9d1]`}><span className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-[#17345d] text-xs font-black text-white">{quest.number}</span><span className="grid size-14 place-items-center rounded-2xl bg-white/65 text-3xl font-black">{quest.symbol}</span><h3 className="mt-5 max-w-[13rem] text-2xl font-black">{quest.title}</h3><p className="mt-2 text-sm font-bold text-[#365477]">{quest.type}</p><span className="mt-auto w-fit rounded-full bg-white/75 px-3 py-1 text-xs font-extrabold">{quest.status}</span><span className="mt-4 font-black text-[#17345d] group-hover:underline">Lihat quest →</span></Link>;
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
