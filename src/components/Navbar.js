import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Lock from '../assets/lock.svg'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);


    const handleToggle = () => {
        setToggle(!toggle);
    }



  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] mx-auto w-full h-full flex justify-between items-center">
        <img className="h-[25px] px-5 md:px-0" src={Logo} alt="logo" />
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="flex items-center justify-between bg-transparent px-6 gap-2">
            <img src={Lock} alt="lock" />
            Login
          </button>
          <button className="bg-[#20b486] px-8 py-3 rounded-md text-white font-bold">
            Sign up for Free
          </button>
        </div>

        <div onClick={handleToggle} className="md:hidden cursor-pointer">
          <img
            className="px-5 md:px-0"
            src={toggle ? Close : Hamburger}
            alt="hamburger"
          />
        </div>
      </div>

      {/* for mobile menu  */}
      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-200 text-lg font-bold">Home</li>
          <li className="p-4 hover:bg-gray-200 text-lg font-bold">About</li>
          <li className="p-4 hover:bg-gray-200 text-lg font-bold">Support</li>
          <li className="p-4 hover:bg-gray-200 text-lg font-bold">Platform</li>
          <li className="p-4 hover:bg-gray-200 text-lg font-bold">Pricing</li>

          <div className="flex flex-col space-y-5 my-4">
            <button className="flex items-center justify-center border border-[#20b486] text-lg font-bold 
            py-4 bg-transparent px-6 gap-2 hover:animate-pulse">
              <img className='hover:animate-spin' src={Lock} alt="lock" />
              Login
            </button>
            <button className="bg-[#20b486] text-lg font-bold px-8 py-5 rounded-md text-white 
            hover:bg-opacity-70">
              Sign up for Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar