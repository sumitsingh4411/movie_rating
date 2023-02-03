import React from "react";

import { useSelector } from "react-redux";

function MovieList() {
  const { movieList } = useSelector((state) => state.movie);
  console.log(movieList);
  return <div>MovieList</div>;
}

export default MovieList;
