import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='flex justify-center items-center py-5'>
        <Link href="/posts" className="text-20 text-id hover:text-red font-bold">POSTS</Link>
        <Link href="/photos" className="text-20 text-id hover:text-red font-bold ms-10">PHOTOS</Link>
    </header>
  )
}

export default Header