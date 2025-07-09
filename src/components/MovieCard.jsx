import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, variant, onClick }) {
  const isLarge = variant === "large";

  return (
    <div
      className={`min-w-[110px] ${
        isLarge ? "md:min-w-[200px]" : "md:min-w-[150px]"
      } cursor-pointer hover:scale-110 transition-all duration-150 ease-in`}
      onClick={() => onClick(movie.id)}
    >
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className={`
          w-full // Gambar mengambil lebar penuh dari parent div
          // Tinggi tetap (h-[300px] dan h-[220px]) dihapus
          rounded-lg border-1 border-transparent hover:border-[#3a5bff] hover:border-[3px]
          transition-all duration-200 ease-in-out object-contain 
        `}
      />
      {/* Tambahkan judul film di bawah gambar */}
      <h2 className="text-white text-sm md:text-base mt-2 text-center">
        {movie.title}
      </h2>
    </div>
  );
}

export default MovieCard;
