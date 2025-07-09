import React from 'react';
import MovieCard from './MovieCard';

function SearchResults({ movies, onMovieClick }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-white text-center p-8">
        No results found for your search.
      </div>
    );
  }

  return (
    <div className="p-8 px-8 md:px-16">
      <h2 className="text-[20px] text-white font-bold mb-4">Search Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"> {/* Ganti gap-4 menjadi gap-6 */}
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => onMovieClick(movie.id)}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;