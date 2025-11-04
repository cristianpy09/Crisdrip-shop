import { titleFont } from '@/confg/fonts'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export default function TopMenu() {
  return (
    <nav className='flex px-5 justify-between items-center w-full' >
            <div>
                <Link href="/" >
                <span className={`${titleFont.className} antialiased font-bold`} >CrisDripShop</span>
                <span > | Shop</span>

                </Link>    
            </div>    

            <div  className='hidden sm:block' > 
                <Link className='m-2 9-2 rounded-md transition-all hover:bg-gray-100' href="/category/men" > Hombres </Link>
                <Link className='m-2 9-2 rounded-md transition-all hover:bg-gray-100' href="/category/Mujeres" > Mujeres </Link>
                <Link className='m-2 9-2 rounded-md transition-all hover:bg-gray-100' href="/category/kids" > Niños</Link>

            </div>

    
            <div className='flex items-center space-x-4'>

                <Link href="/search" >
                    <IoSearchOutline className='w-5 h-5' />
                </Link>
                <Link href="/cart" >
                    <IoCartOutline className='w-5 h-5' />
                </Link>

                <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' >
                    Menu
                </button>


            </div>

    </nav>
  )
}
