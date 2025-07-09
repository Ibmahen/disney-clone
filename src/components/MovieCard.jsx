import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, variant }) {
  const isLarge = variant === "large";

  return (
    <div
      className={`min-w-[110px] ${
        isLarge ? "md:min-w-[200px]" : "md:min-w-[150px]"
      }`}
    >
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className={`
          ${isLarge ? "w-[110px] md:w-[200px] h-[300px]" : "w-full h-[220px]"}
          rounded-lg hover:border-[3px] border-gray-400 cursor-pointer
        `}
      />
    </div>
  );
}

export default MovieCard;
