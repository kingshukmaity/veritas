"use client"
import { useTheme } from "next-themes";
import Navbar from "../components/navbar";
import Ridebar from "../components/ridebar";
import Sidebar from "../components/sidebar";
import React from "react";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <main className="relative flex h-screen overflow-hidden bg-slate-100">
      {/* Sidebar Component */}
      <section className="hidden md:flex md:flex-shrink-0">
        <Sidebar />
      </section>
      {/* Main Screen */}
      <section
        className={`flex-1 overflow-y-auto overflow-x-hidden ${
          theme === "dark" ? "bg-zinc-900 text-white" : "bg-white"
        }`}
      >
        <div className="relative flex flex-col sm:flex-row">
          <Navbar />
          <div className="w-full py-1 md:-ml-8 md:w-[75%] md:py-10">
            {children}
          </div>
          {/* Right Sidebar */}
          <div className="hidden md:flex">
            <Ridebar />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboardlayout;
