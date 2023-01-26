import React from 'react'
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <section className=' bg-slate-50 '>
      <div className='max-w-6xl m-auto '>

      <div className='flex justify-between'>

      <div className='p-3  cursor-pointer'>
       <a href="#">
         <img  className='object-contain w-44 ' src={Logo} alt="" />
        </a>
      </div>
      <div className='flex items-center text-slate-600 gap-3 text-xl font-serif'>

      <a href='#university' className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> University</a>
      <a  href='#destination' className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> Study in Abroad</a>
      <a href='#student_support' className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> Student Support</a>
      <a href='#about' className='p-3 hover:text-white hover:bg-slate-600 duration-300 cursor-pointer'> About Us</a>
      <a href='#contact' className='p-3 hover:text-white border-2 border-slate-700 rounded-3xl  hover:bg-slate-600 duration-300 cursor-pointer'> Contact</a>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Navbar