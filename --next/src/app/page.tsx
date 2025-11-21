import { ModeToggle } from '@/components/DarkModeToggle'
import React from 'react'
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
// import SideBar from "@/components/SideBar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import SideBarComponent from "@/components/SideBar";

const page = () => {
  return (
        <>
        <SidebarProvider>
      <SideBarComponent />
          <main>
          <SidebarTrigger className="cursor-pointer" />      
          </main>
      </SidebarProvider>
    <div>
    {/* <ModeToggle /> */}
      Nemi AI Home Page
    </div>
        </>
    

  )
}

export default page
