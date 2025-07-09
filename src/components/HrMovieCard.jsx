import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie, onClick }) {
  return (
    <section
      className="hover:scale-110 transition-all duration-150 ease-in cursor-pointer"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg
        border-1 border-transparent hover:border-[#3a5bff] hover:border-[3px] transition-all duration-200 ease-in-out" 
        />
      <h2
        className="w-[110px] md:w-[260px] text-white mt-2 text-center"
      >
        {movie.title}
      </h2>
    </section>
  );
}

export default HrMovieCard;
