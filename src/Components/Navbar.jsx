import React from 'react'
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <section className=' bg-slate-50 '>
      <div className='max-w-6xl m-auto '>

      <div className='flex justify-between'>

      <div className='p-3  cursor-pointer'>
        <img className='object-contain w-44 ' src={Logo} alt="" />
      </div>
      <div className='flex items-center text-slate-600 gap-3 text-xl font-serif'>

      <div className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> University</div>
      <div className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> Study in Abroad</div>
      <div className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> Student Support</div>
      <div className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> Contact</div>
      <a href='#test4' className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> About Us</a>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Navbar