import React from 'react'
import HeroImg from '../assets/heroImg.png'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto grid md:grid-cols-2 px-5 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="text-2xl text-[#20b486] font-medium py-2">
            START TO SUCCESS
          </p>
          <h1 className="md:text-6xl text-5xl font-semibold py-2 md:leading-[72px]">
            Access To
            <span className="text-[#20b486]"> 5000+ </span>
            Courses from
            <span className="text-[#20b486]"> 300 </span>
            Instructors & Institutions
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <form className="bg-white border max-w-[700px] flex items-center justify-between p-4 input-bx-shadow rounded-md">
            <input
              className="bg-white w-full mr-3 outline-none"
              placeholder="What you want to learn?"
              type="text"
            />
            <button>
              <AiOutlineSearch size={20} className="icon text-black" />
            </button>
          </form>
        </div>

        <img className='order-first md:order-last' src={HeroImg} alt="hero" />
      </div>
    </div>
  );
}

export default Hero