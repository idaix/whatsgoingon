import React from 'react'
import { Link } from 'react-router-dom'
import LogoSrc from '../assets/logo.png'
const Logo = () => {
  return (
    <Link to='/'>
        <figure className='w-full'>
            <img src={LogoSrc} alt="What's Going On Logo" />
        </figure>
    </Link>
  )
}

export default Logo