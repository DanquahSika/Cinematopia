import React from "react";
import star from "../../assets/img/star.png";

const MovieCard = ({ title, poster, release, rating }) => {
  return (
    <div className="w-330 transition-transform m-0 flex items-center flex-col p-0 rounded-md shadow-md mr-3 mb-2 bg-emerald-950">
      <img
        src={poster}
        alt={title}
        className="w-full h-auto object-fill max-w-full rounded-t"
        style={{ maxWidth: "250px" }}
      />
      <p>{title}</p>
      <div className="flex items-center  justify-center pb-2">
        <p className="mr-2">{release}</p>
        <img src={star} className="w-7" />
        <p className=" text-base">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
