import SideBar from '@/components/admin/SideBar'
import React from 'react'

function Adminlayout({children}:{children:React.ReactNode}) {
  return (

    <div className='flex'>
<div className='min-h-screen w-[300px] bg-zinc-300'>
    <SideBar/>
</div>
<div className='p-4 w-full '>

  {children}
</div>
    </div>

  )
}

export default Adminlayout


