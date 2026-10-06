"use client";

import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return <div className={`min-h-screen transition-[padding] duration-200 ${collapsed ? "md:pl-[80px]" : "md:pl-[280px]"}`}><Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />{children}</div>;
}
