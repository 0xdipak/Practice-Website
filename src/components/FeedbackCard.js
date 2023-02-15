import React from "react";
import Avatar from "../assets/avatar.png";
import QM from "../assets/quotationMark.png";

const FeedbackCard = () => {
  return (
    <div className="bg-white p-8 shadow-xl rounded-3xl my-8 mx-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img src={Avatar} alt="/" />
          <div>
            <h1>Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <img className="h-8" src={QM} alt="/" />
      </div>

      <div className="py-8">
        <h3 className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          laboriosam veritatis praesentium nihil nemo, animi laborum autem quae
          impedit tenetur quia, earum mollitia fugit perferendis, qui inventore
          nobis quaerat possimus voluptatibus assumenda quasi excepturi ullam
          facere. Exercitationem alias laudantium reprehenderit quisquam, illo
          consequuntur, quia vel sed dolores obcaecati maxime natus!
        </h3>
      </div>
    </div>
  );
};

export default FeedbackCard;
