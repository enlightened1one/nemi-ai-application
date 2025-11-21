"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuItem, 
} from "@/components/ui/sidebar"
import React from "react"
import { ModeToggle } from "./DarkModeToggle"

function SideBarComponent() {
  return (
    <Sidebar   className="overflow-x-hidden" >
      <SidebarHeader className="px-4 py-3 border-b flex flex-row justify-between items-center">
        <p className="font-semibold"> Brobot<sup className="text-[0.5rem] leading-loose" >nemi&reg;</sup>
        </p>
        <span>
        <ModeToggle />
        </span>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenuItem ><button 
            
          // onClick={() => onSelect("overview")}
          className="text-yellow-400">overview</button></SidebarMenuItem>
          <SidebarMenuItem ><button
          //  onClick={() => onSelect("overview")}
            className="text-yellow-400">settings</button></SidebarMenuItem>
          {/* <p>Chat Models</p> */}
            <SidebarMenuItem>Chat Models</SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-muted-foreground py-2 text-nowrap">
          Product of <a className="
            text-blue-400
          `" href="https://wa.me/+2347019874159" target="_blank">Nemi.Inc&reg;</a>
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}

export default SideBarComponent