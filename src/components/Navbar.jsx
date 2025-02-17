import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                {/* DATA Dropdown */}
                <div className='group relative flex flex-col items-center'>
                    <NavLink to='/data/muong-viet' className='flex flex-col items-center gap-1'>
                        <p>DATA</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <div className='hidden group-hover:block absolute top-full pt-2 z-10'>
                        <div className='bg-white shadow-lg rounded-md py-2 min-w-max'>
                            <Link to='/data/muong-viet' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>MUONG - VIETNAMESE</Link>
                        </div>
                    </div>
                </div>

                {/* DEMO Dropdown */}
                <div className='group relative flex flex-col items-center'>
                    <NavLink to='/demo/muong-viet' className='flex flex-col items-center gap-1'>
                        <p>DEMO</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <div className='hidden group-hover:block absolute top-full pt-2 z-10'>
                        <div className='bg-white shadow-lg rounded-md py-2 min-w-max'>
                            <Link to='/demo/muong-viet' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>MUONG - VIETNAMESE</Link>
                        </div>
                    </div>
                </div>
            </ul>

            <div className='flex items-center gap-6'>
                <div className='group relative'>
                    <a href="https://github.com/vimlp/ViMLP/tree/main" target="_blank" rel="noopener noreferrer">
                        <img src={assets.github} className='w-10 cursor-pointer' alt="GitHub" />
                    </a>
                </div>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* sidebar menu for small screen */}
            <div className={`fixed top-0 right-0 h-full overflow-hidden bg-white transition-all duration-300 shadow-lg ${visible ? 'w-64' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-gray-100' to='/'>HOME</NavLink>

                    {/* DATA dropdown in mobile menu */}
                    <div className='relative'>
                        <div className='py-2 pl-6 border hover:bg-gray-100'>DATA</div>
                        <div className='bg-gray-50'>
                            <NavLink onClick={() => setVisible(false)} className='py-2 pl-10 border-l hover:bg-gray-100 block' to='/data/muong-viet'>MUONG - VIETNAMESE</NavLink>
                        </div>
                    </div>

                    {/* DEMO dropdown in mobile menu */}
                    <div className='relative'>
                        <div className='py-2 pl-6 border hover:bg-gray-100'>DEMO</div>
                        <div className='bg-gray-50'>
                            <NavLink onClick={() => setVisible(false)} className='py-2 pl-10 border-l hover:bg-gray-100 block' to='/demo/muong-viet'>MUONG - VIETNAMESE</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;