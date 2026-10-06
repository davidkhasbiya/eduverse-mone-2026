"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

function KiboBadge() {
  return (
    <div className="relative mx-auto h-64 w-64" aria-label="Kibo the learning companion" role="img">
      <div className="absolute inset-5 rounded-full bg-[#ffdc78] opacity-70 blur-2xl" />
      <div className="absolute bottom-2 left-1/2 h-5 w-40 -translate-x-1/2 rounded-full bg-[#17345d]/15 blur-sm" />
      <div className="absolute left-[18%] top-[18%] h-[58%] w-[64%] rounded-[44%] border-[9px] border-[#17345d] bg-[#7dd8d1] shadow-[0_10px_0_#4ba9ad]">
        <div className="absolute -top-12 left-1/2 h-12 w-3 -translate-x-1/2 rounded-full bg-[#17345d]" />
        <div className="absolute -top-16 left-1/2 grid size-11 -translate-x-1/2 place-items-center rounded-full border-4 border-[#17345d] bg-[#ffce4a] text-lg text-[#17345d]">✦</div>
        <div className="absolute left-[16%] top-[37%] size-4 rounded-full bg-[#17345d]" />
        <div className="absolute right-[16%] top-[37%] size-4 rounded-full bg-[#17345d]" />
        <div className="absolute left-1/2 top-[50%] h-5 w-9 -translate-x-1/2 rounded-b-full border-b-4 border-[#17345d]" />
        <div className="absolute -left-[13%] top-[42%] h-20 w-10 rotate-[22deg] rounded-full border-7 border-[#17345d] bg-[#ffb86b]" />
        <div className="absolute -right-[13%] top-[42%] h-20 w-10 rotate-[-22deg] rounded-full border-7 border-[#17345d] bg-[#ffb86b]" />
      </div>
      <div className="absolute bottom-1 right-0 rotate-6 rounded-xl border-2 border-[#17345d] bg-white px-3 py-2 text-sm font-black text-[#17345d] shadow-[3px_4px_0_#17345d]">+10 XP</div>
    </div>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [googleMessage, setGoogleMessage] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = "/dashboard";
  }

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#f7fbff] px-5 py-6 text-[#17345d] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-[#dff3ef]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 size-80 rounded-full bg-[#fff0bd]" />
      <div className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[32px] border-2 border-[#17345d] bg-white shadow-[10px_10px_0_#17345d] lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative overflow-hidden bg-[#dff3ef] px-7 py-9 sm:px-12 sm:py-12 lg:px-14 lg:py-14">
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="Kembali ke EduVerse">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#ffce4a] text-2xl shadow-[0_5px_0_#e59f26] transition-transform group-hover:-rotate-6">✦</span>
            <span><span className="block text-xl font-extrabold tracking-tight">EduVerse</span><span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6880a5]">Your Learning Adventure</span></span>
          </Link>
          <div className="mt-10 sm:mt-14"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#26858b]">Quest berikutnya siap</p><h1 className="mt-3 max-w-md text-4xl font-black leading-tight sm:text-5xl">Selamat Datang Kembali!</h1><p className="mt-4 max-w-sm text-base leading-7 text-[#365477]">Petualangan belajarmu menunggumu. Kibo sudah menyiapkan quest seru di Math Kingdom.</p></div>
          <div className="mt-5 sm:mt-8"><KiboBadge /></div>
          <div className="absolute right-8 top-9 text-2xl text-[#f2a52e]">✦</div><div className="absolute bottom-8 left-8 text-xl text-[#f2a52e]">✦</div>
        </section>
        <section className="px-7 py-9 sm:px-12 sm:py-12 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-md"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f4d276] bg-[#fff7dc] px-3 py-2 text-xs font-extrabold text-[#a66e14]"><span aria-hidden="true">🗺</span> Peta petualanganmu</div><h2 className="text-3xl font-black tracking-tight sm:text-4xl">Masuk ke EduVerse</h2><p className="mt-3 text-base leading-7 text-[#617692]">Lanjutkan petualangan belajarmu bersama Kibo.</p>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div><label htmlFor="email" className="mb-2 block text-sm font-extrabold">Email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="Masukkan email kamu" required className="w-full rounded-2xl border-2 border-[#cbdbe5] bg-[#fafdff] px-4 py-3.5 text-[#17345d] outline-none transition placeholder:text-[#91a3b6] focus:border-[#26858b] focus:ring-4 focus:ring-[#8fd9d1]/40" /></div>
              <div><label htmlFor="password" className="mb-2 block text-sm font-extrabold">Password</label><div className="relative"><input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Masukkan password kamu" required className="w-full rounded-2xl border-2 border-[#cbdbe5] bg-[#fafdff] px-4 py-3.5 pr-20 text-[#17345d] outline-none transition placeholder:text-[#91a3b6] focus:border-[#26858b] focus:ring-4 focus:ring-[#8fd9d1]/40" /><button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-extrabold text-[#26858b] hover:bg-[#dff3ef] focus:outline-none focus:ring-2 focus:ring-[#26858b]">{showPassword ? "Sembunyikan" : "Lihat"}</button></div></div>
              <button type="submit" className="w-full rounded-2xl bg-[#f4aa32] px-5 py-4 font-extrabold text-[#17345d] shadow-[0_5px_0_#d98b1d] transition hover:-translate-y-0.5 hover:bg-[#ffc451] focus:outline-none focus:ring-4 focus:ring-[#f4aa32]/40 active:translate-y-1 active:shadow-none">Masuk <span aria-hidden="true">→</span></button>
            </form>
            <div className="my-6 flex items-center gap-3 text-xs font-bold text-[#91a3b6]"><span className="h-px flex-1 bg-[#dce7ef]" /> atau <span className="h-px flex-1 bg-[#dce7ef]" /></div>
            <button type="button" onClick={() => setGoogleMessage(true)} className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#cbdbe5] bg-white px-5 py-3.5 font-extrabold text-[#365477] transition hover:border-[#17345d] hover:bg-[#fafdff] focus:outline-none focus:ring-4 focus:ring-[#8fd9d1]/40"><span className="grid size-6 place-items-center rounded-full bg-[#4285f4] text-sm font-black text-white">G</span> Masuk dengan Google</button>
            {googleMessage && <p role="status" className="mt-3 text-center text-xs font-bold text-[#a66e14]">Login Google akan segera hadir untuk petualanganmu.</p>}
            <p className="mt-7 text-center text-sm text-[#617692]">Belum punya akun? <Link href="/register" className="font-extrabold text-[#26858b] underline decoration-2 underline-offset-4 hover:text-[#17345d] focus:outline-none focus:ring-2 focus:ring-[#26858b]">Daftar sekarang</Link></p>
          </div>
        </section>
      </div>
    </main>
  );
}
