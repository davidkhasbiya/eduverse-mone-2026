import Link from "next/link";
import { notFound } from "next/navigation";
import { quests } from "../../../../../lib/mock-data";

export default async function QuestPlayPlaceholder({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quest = quests.find((item) => item.slug === slug);
  if (!quest) notFound();

  return <main className="min-h-screen bg-[#f7fbff] px-5 pb-14 pt-24 text-[#17345d] sm:px-8 lg:px-10"><div className="mx-auto max-w-3xl rounded-[30px] border-2 border-[#17345d] bg-white p-8 text-center shadow-[8px_8px_0_#17345d] sm:p-12"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#26858b]">Aktivitas mock</p><div className="mx-auto mt-5 grid size-20 place-items-center rounded-full border-2 border-[#17345d] bg-[#ffcf58] text-4xl shadow-[0_5px_0_#d98b1d]" aria-hidden="true">✦</div><h1 className="mt-6 text-4xl font-black">{quest.title}</h1><p className="mx-auto mt-4 max-w-xl leading-7 text-[#365477]">Ini adalah layar aktivitas sementara. Soal dan penilaian asli akan ditambahkan nanti.</p><div className="mt-7 rounded-2xl bg-[#eef8f7] p-4 text-left text-sm font-bold leading-6 text-[#365477]"><p className="font-black text-[#17345d]">Tantangan siap dimainkan</p><p className="mt-1">Selesaikan aktivitas mock ini untuk melihat hasil quest.</p></div><Link href={`/result/${quest.slug}`} className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border-2 border-[#17345d] bg-[#17345d] px-6 py-4 font-black text-white shadow-[0_4px_0_#0b213e] focus:outline-none focus:ring-4 focus:ring-[#8fd9d1] sm:w-auto">Selesaikan Quest / Lihat Hasil <span className="ml-2" aria-hidden="true">→</span></Link><Link href={`/quest/${quest.slug}`} className="mt-5 block font-extrabold text-[#26858b] underline underline-offset-4">Kembali ke detail quest</Link></div></main>;
}
