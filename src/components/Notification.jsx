import React from "react";
import { buddy } from "../assets";
import { starReview } from "../assets";

function Notification({ className, title }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(starReview);
  }

  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-blue-400/60 backdrop-blur border border-n-1/30 rounded-2xl gap-5`}
    >
      <div className="flex-col">
        <img
          src={buddy}
          width={62}
          height={62}
          alt="photo of reviewer"
          className="rounded-xl mx-auto mb-[0.5rem]"
        />

        <div className="body-2 text-n-1 text-center">Matt Rivera</div>
      </div>

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex justify-center gap-1 ">

          {stars.map((item, index) => (
            <ul key={index}>
              <img src={item} width={18} height={18} alt="star" />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;
