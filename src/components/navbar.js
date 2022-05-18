import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen ]=useState(false)

    const handleToggle = () => {
       setOpen(prev=> !prev);
    };
   
  return (

      
    <header className='z-50 bg-[#fdfdfe] shadow-md text-white h-14 flex items-center sticky top-0'>
        <nav className='flex items-center mx-auto justify-between container px-6'>
            <div className='flex items-center gap-1 w-32'>
                    <a className='flex jusitfy-start w-8 h-8 relative'>
                    <div>
                    </div>
                        
                    </a>
                    <a className=''>
                            <h2 className='text-sm font-light text-black font-bold'>
                                BitMe.lt
                                </h2>
                    </a>
            </div>
            <div className="hidden md:block">
               
            </div>
            <div className='md:hidden'>
            <button className=' w-12 h-12 flex justify-center items-center' onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
           
            
            </div>
        </nav>
    </header>
  )
}

export default Navbar