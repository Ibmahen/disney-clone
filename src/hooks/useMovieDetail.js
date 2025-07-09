import { useState } from 'react';

const useMovieDetail = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseMovieDetail = () => {
    setSelectedMovieId(null);
  };

  return {
    selectedMovieId,
    handleMovieClick,
    handleCloseMovieDetail,
  };
};

export default useMovieDetail;