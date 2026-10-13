"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import GlobalKiboChat from "../../components/GlobalKiboChat";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false); const hydrated = useRef(false);
  // Restore the preference after the first identical server/client render.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { const saved = window.localStorage.getItem("eduverse-sidebar-collapsed"); if (saved === "true") setCollapsed(true); hydrated.current = true; }, []);
  useEffect(() => { if (hydrated.current) window.localStorage.setItem("eduverse-sidebar-collapsed", String(collapsed)); }, [collapsed]);
  return <div className={`min-h-screen transition-[padding] duration-200 ${collapsed ? "md:pl-[80px]" : "md:pl-[280px]"}`}><Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />{children}<GlobalKiboChat /></div>;
}
