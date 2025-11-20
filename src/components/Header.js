import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='p-6'>
            <Image src={"/images/Logo.png"} alt='logo' width={180} height={180}/>
        </div>
    </div>
  )
}
