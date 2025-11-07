"use client"

import { titleFont } from '@/confg/fonts'
import { useUIStore } from '@/store/ui/ui-store'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export default function TopMenu() {

     const openMenu =useUIStore((state)=>state.openSideMenu)
  return (
    <nav className='flex px-5 justify-between items-center w-full' >
            <div>
                <Link href="/" >
                <span className={`${titleFont.className} antialiased font-bold`} >CrisDripShop</span>
                <span > | Shop</span>

                </Link>    
            </div>    

            <div  className='hidden sm:block' > 
                <Link className='m-2 9-2 rounded-md transition-all hover:bg-gray-100 p-2' href="/category/men" > Hombres </Link>
                <Link className='m-2 9-2 rounded-md transition-all hover:bg-gray-100 p-2' href="/category/women" > Mujeres </Link>
                <Link className='m-2 9-2 rounded-md transition-all hover:bg-gray-100 p-2' href="/category/kid" > Niños</Link>

            </div>

    
            <div className='flex items-center space-x-4'>

                <Link href="/search" >
                    <IoSearchOutline className='w-5 h-5' />
                </Link>
                <Link href="/cart" >
                    <IoCartOutline className='w-5 h-5' />
                </Link>

                <button onClick={openMenu} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 cursor-pointer' >
                    Menu
                </button>


            </div>

    </nav>
  )
}
