import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_, genreName, onMovieClick }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    const getMovieByGenreId = () => {
      GlobalApi.getMovieByGenreId(genreId)
        .then((resp) => {
          setMovieList(resp.data.results);
        })
        .catch((err) => {
          console.error("Gagal ambil data dari API:", err);
        });
    };

    if (genreId) getMovieByGenreId();
  }, [genreId]);

  const slideRight = (element) => (element.scrollLeft += 500);
  const slideLeft = (element) => (element.scrollLeft -= 500);

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer 
          hidden md:block absolute ${
            index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"
          }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) =>
          index_ % 3 === 0 ? (
            <HrMovieCard key={item.id} movie={item} onClick={onMovieClick} />
          ) : (
            <MovieCard
              key={item.id}
              movie={item}
              variant={
                ["Adventure", "Animation", "Crime"].includes(genreName)
                  ? "large"
                  : ""
              }
              onClick={onMovieClick}
            />
          )
        )}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0
          absolute right-0 ${index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;