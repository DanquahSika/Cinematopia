import React from "react";
import star from "../../assets/img/star.png";
import play from "../../assets/img/play.svg";

const MovieCard = ({ title, poster, release, rating }) => {
  return (
    <div
      className="w-330  m-0 flex items-center flex-col p-0 rounded-md shadow-md mr-3 mb-2 relative bg-teal-950 bg-opacity-25"
      style={{ color: "#ea8f11" }}
    >
      <img
        src={play}
        alt="play-icon"
        className="h-auto absolute top-36 cursor-pointer transform 
        transition duration-3000 
        hover:scale-125"
        style={{ width: "80px" }}
      />
      <img
        src={poster}
        alt={title}
        className="w-full h-auto object-fill max-w-full rounded-t "
        style={{ maxWidth: "250px" }}
      />
      <p className="font-bold pt-1">{title}</p>
      <div className="flex items-center  justify-center pb-2 pt-2">
        <p className="mr-2 font-semibold" style={{ color: "#704912" }}>
          {release}
        </p>
        <img src={star} className="w-6 mb-1 ml-2" />
        <p className=" font-bold text-lg ml-1">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
