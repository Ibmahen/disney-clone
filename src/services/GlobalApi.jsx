import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTU2YzZhZjQ4NjRiYjFjMTJjNDExNzE4Nzk2ZmYwZCIsIm5iZiI6MTc0OTkxNDM1My43ODQsInN1YiI6IjY4NGQ5MmYxZWY1NDZjOTVjNTI5NGE3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IUwfreSO0EMFut9bDJYY2cHmEqlZsDBvq-TU7sDLQM4";

const headers = {
  Authorization: `Bearer ${token}`,
  accept: "application/json",
};

const getTrendingVideos = () =>
  axios.get(`${movieBaseUrl}/trending/all/day`, { headers });

const getMovieByGenreId = (genreId) =>
  axios.get(`${movieBaseUrl}/discover/movie?with_genres=${genreId}`, { headers });

const getMovieDetail = (movieId) => 
  axios.get(`${movieBaseUrl}/movie/${movieId}`, { headers });

const searchMovies = (query) => 
  axios.get(`${movieBaseUrl}/search/movie?query=${query}`, { headers });

export default {
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetail,
  searchMovies,
};
