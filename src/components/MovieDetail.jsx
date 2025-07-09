import React, { useEffect, useState } from 'react';
import GlobalApi from '../services/GlobalApi';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetail({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId) {
      GlobalApi.getMovieDetail(movieId)
        .then((resp) => {
          setMovie(resp.data);
        })
        .catch((err) => {
          console.error("Failed to fetch movie details:", err);
          setMovie(null);
        });
    }
  }, [movieId]);

  if (!movie) {
    return (
      <div className="text-white text-center p-8">
        {movieId ? "Loading movie details..." : "No movie selected."}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#121212] rounded-lg p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold p-2 rounded-full hover:bg-gray-700"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-400 mb-4">{movie.tagline}</p>
            <p className="text-lg mb-4">{movie.overview}</p>
            <div className="mb-2">
              <span className="font-semibold">Release Date:</span>{" "}
              {movie.release_date}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Rating:</span>{" "}
              {movie.vote_average?.toFixed(1)} / 10 ({movie.vote_count} votes)
            </div>
            <div className="mb-2">
              <span className="font-semibold">Genres:</span>{" "}
              {movie.genres?.map((genre) => genre.name).join(", ")}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Runtime:</span> {movie.runtime} minutes
            </div>
            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Visit Homepage
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;