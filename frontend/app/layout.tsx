
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduVerse | Your Learning Adventure",
  description: "Jelajahi dunia belajar yang seru bersama EduVerse dan Kibo.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
