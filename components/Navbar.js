import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-main flex flex-row space-x-10 text-2xl font-bold text-white bg-black cursor-pointer z-40 opacity-50 h-14 my-auto  items-center sticky-top  ' >
       <div className="1st hover:text-black hover:bg-white  border-solid   py-1 px-1 rounded-3xl"><img src="./online_store/logo.png" className='w-16 h-12 mx-1' alt="logo" /></div>     
       <div className="2nd hover:text-black hover:bg-white  border-solid   py-1 px-1 rounded-3xl">Home</div>
       <div className="4th hover:text-black hover:bg-white  border-solid   py-1 px-1 rounded-3xl">Our Clients</div>
       <div className="5th hover:text-black hover:bg-white  border-solid   py-1 px-1 rounded-3xl">Contact Us</div>
    </div>
  )
}

export default Navbar