import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import GlobalApi from "../services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider({ onMovieClick }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => slideLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => slideRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-[#3a5bff] transition-all duration-100 ease-in cursor-pointer"
            onClick={() => onMovieClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;