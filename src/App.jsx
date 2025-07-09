import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenreMovieList';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/SearchResults';

import useMovieDetail from './hooks/useMovieDetail';
import useMovieSearch from './hooks/useMovieSearch';

function App() {
  const { selectedMovieId, handleMovieClick, handleCloseMovieDetail } = useMovieDetail();
  const { searchResults, showSearchResults, handleSearch, clearSearchResults } = useMovieSearch();

  const onMovieCardClick = (movieId) => {
    handleMovieClick(movieId);
  };

  const onHeaderSearch = (query) => {
    handleSearch(query);
    handleCloseMovieDetail();
  };

  // Fungsi baru untuk kembali ke home
  const handleGoHome = () => {
    handleCloseMovieDetail(); // Tutup detail film jika sedang terbuka
    clearSearchResults();     // Hapus dan sembunyikan hasil pencarian
  };

  return (
    <div className="">
      <Header onSearch={onHeaderSearch} onGoHome={handleGoHome} /> {/* Teruskan onGoHome */}
      {selectedMovieId ? (
        <MovieDetail movieId={selectedMovieId} onClose={handleCloseMovieDetail} />
      ) : showSearchResults ? (
        <SearchResults movies={searchResults} onMovieClick={onMovieCardClick} />
      ) : (
        <>
          <Slider onMovieClick={onMovieCardClick} />
          <ProductionHouse />
          <GenreMovieList onMovieClick={onMovieCardClick} />
        </>
      )}
    </div>
  );
}

export default App;