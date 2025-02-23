import React from 'react'
import {Newspaper,  Settings, UserCircleIcon, ShoppingBasketIcon ,LayoutDashboard, User2Icon, LogOut, Folders} from "lucide-react"



const totaldatalist = [
  {
    title:"Categories",
    count:17,
    icon:Folders
  },
  {
    title:"Products",
    count:412,
    icon:Newspaper
  },
  {
    title:"Users",
    count:756,
    icon:User2Icon
  },
  {
    title:"Orders",
    count:17,
    icon:ShoppingBasketIcon
  }
]

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Analytics from '@/components/admin/Analytics'
function Dashboard() {
  return (
    <div className='flex flex-col gap-10 '>

<div className='flex items-center gap-5'>

  {totaldatalist.map((items, index)=>{
    return <Card key={index} className=' bg-zinc-200 p-2 hover:scale-105 transition-all duration-300 ease-in-out w-[200px]'>
  
    <CardContent className='flex flex-col items-center justify-center gap-2'>
      <p className='text-3xl font-bold text-slate-600'>{items.title}</p>
      <div className='flex items-center '>
        <items.icon className='w-8 h-8 mr-2 text-slate-600' />
        <p className='text-4xl text-slate-600 font-semibold'>{items.count}</p>
      </div>
    </CardContent>
  
  </Card>
  })}


</div>

<Analytics/>
    </div>
  )
}

export default Dashboard