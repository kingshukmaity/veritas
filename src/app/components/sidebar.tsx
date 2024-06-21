"use client";

import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Search,
  CreditCard,
  MessagesSquare,
  Music,
  Code,
  Settings,
} from "lucide-react";
import FreeCounter from "./free-counter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTheme } from "next-themes";
// import FreeCounter from "./free-counter";

const monsterrat = Montserrat_Alternates({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Coversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Chats",
    icon: MessagesSquare,
    href: "/chats",
    color: "text-pink-700",
  },
  {
    label: "Search",
    icon: Search,
    href: "/search",
    color: "text-orange-700",
  },
  {
    label: "Manage Subscription",
    icon: CreditCard,
    href: "/manage-subscription",
    color: "text-emerald-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const { setTheme } = useTheme();

  return (
    <main className="flex h-full w-full flex-col space-y-4 bg-[#111827] py-4 text-white sm:w-72">
      <div className="flex-1 px-3 py-2">
        <Link href="/" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 flex h-8 w-8 items-center justify-center rounded-full border">
            <span>MS</span>
          </div>
          <h1 className={cn("text-2xl font-bold", monsterrat.className)}>
            MindSync
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.label}
                className={cn(
                  "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                  pathName === route.href
                    ? "bg-white/20 text-white"
                    : "text-zinc-400",
                )}
              >
                <div className="flex flex-1 items-center">
                  <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                  <span>{route.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <FreeCounter />
      <main className="px-3">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="account"
              className="bg-whit/10"
              onClick={() => setTheme("light")}
            >
              Light
            </TabsTrigger>
            <TabsTrigger value="password" onClick={() => setTheme("dark")}>
              Dark
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </main>
    </main>
  );
};

export default Sidebar;
