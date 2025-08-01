import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList({ onMovieClick }) {
  return (
    <div>
      {GenresList.genere?.length > 0 &&
        GenresList.genere.slice(0, 5).map((item, index) => (
          <div className="p-8 px-8 md:px-16" key={item.id}>
            <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
            <MovieList
              genreId={item.id}
              index_={index}
              genreName={item.name}
              onMovieClick={onMovieClick}
            />
          </div>
        ))}
    </div>
  );
}

export default GenreMovieList;