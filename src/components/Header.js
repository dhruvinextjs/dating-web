import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#ffffff]'>
        <div className='p-5 max-w-7xl mx-auto'>
            <Image src={"/images/Logo.png"} alt='logo' width={180} height={180}/>
        </div>
    </div>
  )
}
