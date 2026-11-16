import { NavLink } from 'react-router'
import { Button } from './ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <nav className= 'py-5 md:py-0 dark:border-b border-gray-700 flex md:flex-row gap-4 md:gap-0  flex-col md:h-14 justify-around items-center '>
        {/* brand */}
        <div className="font-semibold items-center flex gap-2">
            <span className='inline-block rounded-md text-center  h-6 w-6 bg-gradient-to-r from-primary to-primary/40'>{"P"}</span>
            <span className='text-base tracking-tight'>Auth App</span>
        </div>
        <div className='flex gap-4 items-center'>
            <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/login"}>
              <Button size={'sm'} className="cursor-pointer" variant={"outline"}>Login</Button>
          </NavLink>
            <NavLink to={"/signup"}>
                <Button size={'sm'} className="cursor-pointer" variant={"outline"}>Sigup</Button>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar