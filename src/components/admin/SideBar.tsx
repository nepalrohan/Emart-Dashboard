"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../images/logo.png";
import {Newspaper,  Settings, UserCircleIcon, ListOrdered, LayoutDashboard, User2Icon, LogOut, Folders} from "lucide-react"
import { usePathname } from "next/navigation";

const config = [
    {
        title: "Dashboard",
        link: "/admin",
        icon: LayoutDashboard
      },
      {
        title: "Categories",
        link: "/admin/categories",
        icon: Folders
      },
    {
      title: "Products",
      link: "/admin/products",
      icon: Newspaper
    },
    {
      title: "Users",
      link: "/admin/users",
      icon: User2Icon
    },
    
   
    {
      title: "Orders",
      link: "/admin/orders",
      icon: ListOrdered
    },
    {
        title: "Settings",
        link: "/admin/settings",
        icon: Settings
      },

      {
        title: "Profile",
        link: "/admin/profile",
        icon: UserCircleIcon
      },

      {
        title: "Logout",
        link: "/",
        icon: LogOut
      },
  
  

    
   
  ];

function SideBar() {
    const pathname = usePathname();
  return (
    <div className="h-full w-full p-1 flex flex-col gap-2">
      <div className="flex justify-between items-center ">
        <Link href="/" className="flex items-center ">
          <Image src={logo} alt="logo" width={40} />
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
            E-mart
          </h3>
        </Link>
      </div>



      <div className="flex flex-col gap-2 mt-4">


        {
            config.map((items, index)=>{
                return <Link href={items.link} key={index} className={`${pathname === items.link && 'bg-zinc-200'} flex items-center w-full hover:bg-zinc-200 transition-allduration-300 ease-in-out px-8 py-2`}>
                <items.icon className="mr-2 h-4 w-4 text-lg " />  <span  className="text-lg font-semibold text-slate-600 ">{items.title}</span>
              </Link>
            })
        }
        
        
     
      </div>
    </div>
  );
}

export default SideBar;
