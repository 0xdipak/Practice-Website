import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto grid md:grid-cols-6 gap-8 px-5 md:px-0">
        <div className="col-span-2">
          <img className="h-[25px] px-5 md:px-0" src={Logo} alt="logo" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6d737a]">Call : +123456789</h3>
          <h3 className="py-2 text-[#6d737a]">
            Lorem ipsum dolor
            <br />
            sit amet consectetur hdgfy
          </h3>
          <h3 className="py-2 text-[#6d737a]">Email : example@gmail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#e9f8f3] rounded-xl">
              <FaFacebook size={25} color={"#4dc39e"} />
            </div>
            <div className="p-4 bg-[#e9f8f3] rounded-xl">
              <FaTwitter size={25} color={"#4dc39e"} />
            </div>
            <div className="p-4 bg-[#e9f8f3] rounded-xl">
              <FaInstagram size={25} color={"#4dc39e"} />
            </div>
            <div className="p-4 bg-[#e9f8f3] rounded-xl">
              <FaYoutube size={25} color={"#4dc39e"} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6d737a]">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Course</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[#6d737a]">
            <li className="py-2">Design</li>
            <li className="py-2">Development</li>
            <li className="py-2">Markeeting</li>
            <li className="py-2">Business</li>
            <li className="py-2">Lifestyle</li>
            <li className="py-2">Photography</li>
            <li className="py-2">Music</li>
          </ul>
        </div>

        <div className="col-span-2 max-[780px]:w-full">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <h3 className="py-2 text-[#6d737a]">
            Lorem ipsum dolor
            <br />
            sit amet consectetur hdgfy
          </h3>

          <form className="py-4">
            <input
              className="bg-[#f2f3f4] p-3 w-full rounded"
              placeholder="Email Here"
              type="text"
            />

            <button
              className="max-[780px]:w-full my-4 py-3 bg-[#20b486] text-lg font-medium px-8 rounded-md text-white 
            hover:bg-opacity-70"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
