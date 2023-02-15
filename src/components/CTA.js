import React from 'react'
import Cta from '../assets/cta.png'

const CTA = () => {
  return (
    <div className="w-full bg-[#e9f8f3] py-24">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 px-5 md:px-0 items-center">
        <img className="w-[650px] mx-auto" src={Cta} alt="hero" />

        <div className="justify-start gap-4">
          <h1 className="text-3xl font-semibold py-2">
            Join
            <span className="text-[#20b486]"> World's largest </span>
            learning platform today
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Start learning by registering for free
          </p>
          <button
            className="max-[780px]:w-full my-4 bg-[#20b486] text-lg font-bold px-8 py-5 rounded-md text-white 
            hover:bg-opacity-70"
          >
            Sign up for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA