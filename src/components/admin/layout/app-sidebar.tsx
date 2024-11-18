"use client";

import { House } from "lucide-react";
import style from "./app.sidebar.module.scss";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: House,
  },
];

export const AppSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="bg-[#677FB1]">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-12 mb-6 pb-14 border-b">
            <Image
              src="/logo/logo.png"
              width={600}
              height={600}
              alt="logo"
              className="h-auto w-full"
              priority
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="text-white">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`${
                      item.url === pathname
                        ? style.menu_buttom_active
                        : style.menu_buttom
                    }`}
                    asChild
                    // isActive={item.url === pathname ? true : false}
                    size={"lg"}
                  >
                    <Link href={item.url}>
                      <span>
                        <item.icon size={21} />
                      </span>
                      <span className="text-[16px] mt-1">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
