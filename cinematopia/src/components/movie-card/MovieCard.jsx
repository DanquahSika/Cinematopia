import React from "react";
import star from "../../assets/img/star.png";

const MovieCard = ({ title, poster, release, type, rating }) => {
  return (
    <div className="w-330 transition-transform m-0 flex items-center flex-col p-0 rounded-md shadow-md mr-3 mb-2 bg-stone-700">
      <img
        src={poster}
        alt={title}
        className="w-full h-auto object-fill max-w-full rounded-t"
        style={{ maxWidth: "250px" }}
      />
      <p>{title}</p>
      <div className="flex pb-2">
        <p className="mr-2">{release}</p>
        <p className=" text-base">
          {rating}
          <span>
            <img src={star} className="w-3" />
          </span>
        </p>
        <button className="  mx-auto  px-4  rounded-md cursor-pointer bg-transparent">
          {type}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
