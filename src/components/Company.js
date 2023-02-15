import React from 'react'
import Comp1 from '../assets/company-logo-1.png'
import Comp2 from '../assets/company-logo-2.png'
import Comp3 from '../assets/company-logo-3.png'
import Comp4 from '../assets/company-logo-4.png'

const Company = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className="max-w-[600px] md:max-w-[1480px] m-auto px-5 md:px-0">
            <h1 className='text-center text-2xl font-bold text-[#536e96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center text-xl text-[#536e96]'>Leading companies use the same courses to help employees keep their skills fresh.</p>

            <div className="flex-row justify-center py-8 md:gap-8 ">
                <img src={Comp1} alt="/" />
                <img src={Comp2} alt="/" />
                <img src={Comp3} alt="/" />
                <img src={Comp4} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Company