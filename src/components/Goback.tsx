import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import {ArrowLeft} from 'lucide-react'
interface ButtonProp {
    link:string;
    title:string;
}

function Goback({link, title}:ButtonProp) {
  return (
    <Link className='bg-transparent hover:bg-zinc-300 px-5 py-2 flex transition-all duration-300 ease-in-out ' href={link}>
<ArrowLeft className='mr-2' />
{title}

    </Link>
  )
}

export default Goback