import React from "react";
import { BsArrowUpRight } from "react-icons/bs";


const CategoryCard = ({icons, title}) => {
  return (
    <div
      className="categoryCard bg-white p-3 shadow-lg rounded-md flex items-center justify-between 
    border border-transparent hover:border-[#20b486] hover:cursor-pointer group/edit"
    >
      <div className="flex items-center gap-4">
        {icons}
        <h1 className="text-2xl font-semibold ">{title}</h1>
      </div>
      <div className="group-hover/edit:bg-[#20b486] rounded-lg p-3">
        <BsArrowUpRight size={30} color="#20b486" className="arrowIcon" />
      </div>
    </div>
  );
};

export default CategoryCard;
