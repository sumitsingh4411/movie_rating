import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { featchMovieRating } from "../../redux/slices/movieSlice";
import "./Movie.css";

export const Movie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, movieDetails, movieId } = useSelector((state) => state.movie);
  console.log(movieDetails);
  const oepnreview = () => {
    dispatch(featchMovieRating(movieId));
    navigate("/rating");
  };
  return (
    <>
      {status === "loading" && (
        <div className="movieDetails__loading">Loading...</div>
      )}
      <div className="movieDetails">
        <div className="movieDetails__left">
          <img
            src={movieDetails?.image}
            alt={movieDetails?.id}
            className="movieDetails__img"
          />
        </div>
        <div className="movieDetails__right">
          <h1>{movieDetails?.title}</h1>
          <h3>{movieDetails?.year}</h3>
          <p>{movieDetails?.plot}</p>
        </div>
      </div>
      <button className="movieDetails__button" onClick={oepnreview}>
        open Review
      </button>
    </>
  );
};
