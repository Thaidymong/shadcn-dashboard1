"use client";

import * as React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "./components/UserNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex h-screen flex-col">
      <header className="flex h-16 items-center border-b bg-background px-4">
        <div className="w-full flex items-center justify-between mr-4">
          <SidebarTrigger />
          <UserNav />
        </div>
      </header>
      <main className="flex-1 overflow-auto bg-[#F5F6F8] p-6">{children}</main>
    </div>
  );
}
