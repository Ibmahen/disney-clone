import { useState } from 'react';
import GlobalApi from '../services/GlobalApi'; // Pastikan path ini benar

const useMovieSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }
    GlobalApi.searchMovies(query)
      .then((resp) => {
        setSearchResults(resp.data.results);
        setShowSearchResults(true);
      })
      .catch((err) => {
        console.error("Failed to search movies:", err);
        setSearchResults([]);
        setShowSearchResults(true);
      });
  };

  const clearSearchResults = () => {
    setSearchResults([]);
    setShowSearchResults(false);
  };

  return {
    searchResults,
    showSearchResults,
    handleSearch,
    clearSearchResults,
  };
};

export default useMovieSearch;