import React from "react";
import { useSelector } from "react-redux";
import "./Rating.css";

function Rating() {
  const { review } = useSelector((state) => state.movie);
  console.log(review);
  return (
    <div className="rating">
      <h1>Rating</h1>
      <div className="rating__list">
        {review?.map((rating) => (
          <div className="rating__item">
            <h3>{rating.heading}</h3>
            {/* <p className="rating__item__text">
              People{rating.helpuhelpfulNess.votedAsHelpful} of{" "}
              {rating.helpuhelpfulNess.votes} found this helpful
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rating;
