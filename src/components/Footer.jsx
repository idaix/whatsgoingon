import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='py-10 flex flex-col gap-2 items-center'>
        <div className='w-48'>
            <Logo />
        </div>
        <p className='text-gray-500 text-xs'>Dai Chekkal - NYT's Api❤️</p>
    </div>
  )
}

export default Footer