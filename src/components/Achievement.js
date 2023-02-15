import React from 'react'
import AchievementImg from '../assets/achievement.png'
import {SlGraduation, SlPeople} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'

const Achievement = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto grid md:grid-cols-2 px-5 md:px-0">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold md:leading-[72px]">
            Our
            <span className="text-[#20b486]"> Achievements </span>
          </h1>
          <p className="text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>

          <div className="grid grid-cols-2 py-16">
            <div className="py-6 flex items-center">
              <div className="p-4 bg-[#e9f8f3] rounded-xl">
                <SlGraduation size={30} color="#1a906b" />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300</h1>
                <p className="text-[#6d737a]">Instructor</p>
              </div>
            </div>
            <div className="py-6 flex items-center">
              <div className="p-4 bg-[#fffaf5] rounded-xl">
                <FiVideo size={30} color="#ffc27a" />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000+</h1>
                <p className="text-[#6d737a]">Video</p>
              </div>
            </div>
            <div className="py-6 flex items-center">
              <div className="p-4 bg-[#ffeef0] rounded-xl">
                <SlGraduation size={30} color="#ed4459" />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">20,000+</h1>
                <p className="text-[#6d737a]">Students</p>
              </div>
            </div>
            <div className="py-6 flex items-center">
              <div className="p-4 bg-[#f0f7ff] rounded-xl">
                <SlPeople size={30} color="#0076fd" />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1,00,000+</h1>
                <p className="text-[#6d737a]">Users</p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="order-first md:order-last m-auto"
          src={AchievementImg}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Achievement