import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
};
  return (
      <div>
    <div className='navbar w-full items-center'>
      <div className='flex  max-w-[1100px] justify-between m-auto'>
      <h1 className='cc'>
        Regulus
      </h1>
      <button onClick={() => setNav(!nav)} className="block x-lg:hidden z-100">
    {nav ? 
        <AiOutlineClose size={25}style={{color: '${textColor}'}} />
        :
        <AiOutlineMenu size={25} style={{color: '${textColor}'}} /> 
    }
    
</button>
</div>
</div>
    <div className={nav ? ' absolute top-20 right-0 left-0 bottom-0 flex justify-center items-center w-full h-80% bg-cream text-center scale-100 duration-300' :
                 'absolute top-20 right-0 left-0 bottom-0 flex justify-center items-center w-full h-80% bg-cream text-center scale-0 duration-300'}>
    <ul>
      <div className='flex'>
                <div className='p-10 m-4 cards text-4xl hover:scale-110 duration-300 float-right'>
                    <Link href='/'>Home</Link>
                </div>
                <div className='p-10 m-4 cards text-4xl hover:scale-110 duration-300'>
                    <Link href=''>Gallery</Link>
                </div>
      </div>

      <div className='flex'>
                <div className='p-10 m-4 w- cards text-4xl hover:scale-110 duration-300'>
                    <Link href=''>Work</Link>
                </div>
                <div className='p-10 m-4 cards text-4xl hover:scale-110 duration-300'>
                    <Link href=''>Contact</Link>
                </div>
      </div>
            </ul>
    </div>
    </div>
  )
}

export default Navbar