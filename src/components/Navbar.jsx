import React from 'react'
import { Logo } from './'
import { BsSearch, BsList } from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className='py-[2px] border-b-black border-b-[1px] container mx-auto'>
        <div className="w-full flex items-center justify-between p-3">
            <BsList />
            <div className='w-72'>
                <Logo />
            </div>
            <BsSearch />
        </div>
        <ul className='hidden md:flex justify-between  py-2 border-t-gray-200 border-t-[1px] border-b-black border-b-[1px]'>
          {/* <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li>
          <li className=''>Home</li> */}
        </ul>

    </nav>
  )
}

export default Navbar