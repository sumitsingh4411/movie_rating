import React from "react";
import { Switch, Route, Routes, Router } from "react-router-dom";
import Home from "./home/Home";
import { Movie } from "./movie/Movie";
import MovieList from "./movieList/MovieList";
import Rating from "./rating/Rating";

function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movieList" element={<MovieList />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/rating" element={<Rating />} />
    </Routes>
  );
}

export default AllRouter;
