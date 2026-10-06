"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { student } from "../../lib/mock-data";

const mainLinks = [
  { href: "/dashboard", label: "Beranda", icon: "⌂" },
  { href: "/math-kingdom", label: "Math Kingdom", icon: "✦" },
  { href: "/progress", label: "Progress", icon: "↗" },
] as const;

const quests = [
  { href: "/quest/the-missing-numbers", label: "The Missing Numbers", number: "01" },
  { href: "/quest/the-pizza-problem", label: "The Pizza Problem", number: "02" },
  { href: "/quest/the-unknown-x", label: "The Unknown X", number: "03" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
}

type SidebarProps = { collapsed: boolean; onCollapsedChange: (collapsed: boolean) => void };

export default function Sidebar({ collapsed, onCollapsedChange }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-30 grid size-11 place-items-center rounded-2xl border-2 border-[#17345d] bg-[#ffce4a] text-2xl font-black text-[#17345d] shadow-[0_4px_0_#d98b1d] md:hidden"
        aria-label="Buka menu navigasi"
        aria-expanded={open}
      >
        <span aria-hidden="true">☰</span>
      </button>
      {open && <button type="button" className="fixed inset-0 z-40 bg-[#17345d]/45 md:hidden" onClick={() => setOpen(false)} aria-label="Tutup menu navigasi" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[min(84vw,280px)] flex-col border-r-2 border-[#17345d] bg-[#fffdf5] px-5 py-6 shadow-[8px_0_0_rgba(23,52,93,0.08)] transition-[width,transform,padding] duration-200 md:translate-x-0 md:shadow-none ${collapsed ? "md:w-[80px] md:px-3" : "md:w-[280px]"} ${open ? "translate-x-0" : "-translate-x-full"}`} aria-label="Navigasi utama">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" onClick={() => setOpen(false)} className={`flex items-center ${collapsed ? "md:mx-auto" : "gap-3"}`} aria-label="EduVerse Beranda">
            <span className="grid size-10 place-items-center rounded-2xl bg-[#ffce4a] text-2xl shadow-[0_4px_0_#e59f26]">✦</span>
            <span className={collapsed ? "md:hidden" : ""}><span className="block text-lg font-extrabold tracking-tight">EduVerse</span><span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#6880a5]">Learning Adventure</span></span>
          </Link>
          <button type="button" onClick={() => onCollapsedChange(!collapsed)} className="hidden size-9 place-items-center rounded-xl text-lg hover:bg-[#eef8f7] focus:outline-none focus:ring-4 focus:ring-[#8fd9d1]/50 md:grid" aria-label={collapsed ? "Buka sidebar" : "Ciutkan sidebar"} aria-expanded={!collapsed} title={collapsed ? "Buka sidebar" : "Ciutkan sidebar"}><span aria-hidden="true">{collapsed ? "→" : "←"}</span></button>
          <button type="button" onClick={() => setOpen(false)} className="grid size-9 place-items-center rounded-xl text-xl hover:bg-[#eef8f7] md:hidden" aria-label="Tutup menu">×</button>
        </div>

        <nav className="mt-9" aria-label="Menu EduVerse">
          <p className={`px-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#6880a5] ${collapsed ? "md:hidden" : ""}`}>Petualanganmu</p>
          <div className="mt-3 space-y-2">
            {mainLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} title={link.label} aria-label={link.label} className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-extrabold transition hover:bg-[#e8f7f5] focus:outline-none focus:ring-4 focus:ring-[#8fd9d1]/50 ${collapsed ? "md:justify-center md:px-0" : ""} ${isActive(pathname, link.href) ? "bg-[#dff3ef] text-[#17345d] shadow-[3px_3px_0_#8fd9d1]" : "text-[#617692]"}`} aria-current={isActive(pathname, link.href) ? "page" : undefined}><span className="grid size-8 place-items-center rounded-xl bg-white text-lg">{link.icon}</span><span className={collapsed ? "md:hidden" : ""}>{link.label}</span></Link>)}
          </div>
        </nav>

        <div className="mt-8 border-t-2 border-dashed border-[#d7e6ed] pt-6">
          <p className={`px-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#6880a5] ${collapsed ? "md:hidden" : ""}`}>Quest tersedia</p>
          <div className="mt-3 space-y-1">
            {quests.map((quest) => <Link key={quest.href} href={quest.href} onClick={() => setOpen(false)} title={quest.label} aria-label={quest.label} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-[#365477] transition hover:bg-[#fff4cf] focus:outline-none focus:ring-4 focus:ring-[#ffcf58]/50 ${collapsed ? "md:justify-center md:px-0" : ""}`}><span className="grid size-7 place-items-center rounded-lg bg-[#ffcf58] text-[10px] font-black">{quest.number}</span><span className={collapsed ? "md:hidden" : ""}>{quest.label}</span></Link>)}
          </div>
        </div>

        <div className={`mt-auto space-y-4 ${collapsed ? "md:[&>a>span:nth-child(2)]:hidden md:[&>a>span:nth-child(3)]:hidden md:[&>a]:justify-center md:[&>a]:p-2" : ""}`}>
          <div className={`rounded-2xl border-2 border-[#17345d] bg-[#fff4cf] p-3 shadow-[3px_3px_0_#17345d] ${collapsed ? "md:hidden" : ""}`}>
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#a66e14]">Kibo&apos;s tip</p>
            <p className="mt-1 text-xs font-bold leading-5 text-[#365477]">Pelan-pelan, kamu pasti bisa!</p>
          </div>
          <Link href="/progress" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl bg-[#17345d] p-3 text-white focus:outline-none focus:ring-4 focus:ring-[#8fd9d1]/60"><span className="grid size-9 place-items-center rounded-full bg-[#ffb86b] font-black text-[#17345d]">{student.name[0]}</span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-extrabold">{student.name}</span><span className="block text-xs font-bold text-[#ffcf58]">✦ {student.xp} XP</span></span><span aria-hidden="true">›</span></Link>
        </div>
      </aside>
    </>
  );
}
