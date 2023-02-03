import React from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  featchMovieDetails,
  featchMovieList,
  setMovieId,
  setMovieList,
} from "../../redux/slices/movieSlice";
import { Navigate, useNavigate } from "react-router-dom";

let timer = null;
function Home() {
  const [search, setSearch] = React.useState("");
  const { movieList, status } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(movieList, status);
  const fetchmovies = async (search) => {
    dispatch(featchMovieList(search));
  };

  const getMovieList = (search) => {
    setSearch(search);
    // if (timer) {
    //   clearTimeout(timer);
    // } else {
    //   timer = setTimeout(() => {
    fetchmovies(search);
    //   }, 500);
    // }
  };

  const openMovieList = (id) => {
    dispatch(featchMovieDetails(id));
    dispatch(setMovieId(id));
    navigate("/movie");
  };
  return (
    <div className="home">
      <h1>IMDB</h1>
      <input
        className="search"
        type="text"
        placeholder="Search for a movie, tv show, person..."
        value={search}
        onChange={(e) => getMovieList(e.target.value)}
      />

      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Failed to fetch data</div>}
      {status === "succeeded" && (
        <>
          <h1>Titles</h1>
          <div className="movie_List">
            {movieList?.map((movie) => (
              <div
                className="movie"
                onClick={() => {
                  openMovieList(movie.id);
                }}
                key={movie.id}
              >
                <img src={movie.image} alt={movie.id} className="movie_img" />
                <div className="movie_info">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
