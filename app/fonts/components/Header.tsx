import { link } from 'fs'
import Link from 'next/link'
import React from 'react'




export default function Header() {
  return (
   <div className='  flex justify-between px-4 h-14 pt-3 shadow-2xl bg-purple-900'>
    {/* <div className='text-orange-400  text-2xl font-extrabold'>
      LOGO
    </div> */}
    <div className=' flex gap-28 justify-center text-center space-x-10  text-xl text-orange-400 '>
    <div className='cursor-pointer'><Link href={'/'}>Home </Link></div>
    <div className='cursor-pointer'><Link href={'/about'}> About</Link> </div>
    <div className='cursor-pointer' ><Link href={'/contact'} >Contact </Link></div>
    <div className='cursor-pointer'><Link href={'/services'}> Services </Link></div>
</div>
   </div>
  )
}
