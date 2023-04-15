import React from "react";
import "./ExactFilm.style.css";

function ExactFilm({ rating, film }) {
  return (
    <div className="box-film">
      <div className="film-one">
        <div className="rating-style">
          <div className="rating-box">
            <span className="rating-digit">{rating}</span>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
          width="150"
          height="215"
          alt="photos"
        />
        <div>{film.original_title}</div>
      </div>
    </div>
  );
}

export default ExactFilm;
