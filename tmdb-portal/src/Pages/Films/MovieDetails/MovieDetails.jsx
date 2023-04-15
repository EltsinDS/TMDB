import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovieExactActionCreator } from "../../../store/actions";
import "./movieDetails.style.css";

export function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const filmsDetails = useSelector((state) => state.detailsFilm);

  useEffect(() => {
    getMovieDetailsData();
  });

  function getMovieDetailsData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dee7581b88b97cd7cf3691ac50f9c21d`
    )
      .then((result) => result.json())
      .then((film) => dispatch(setMovieExactActionCreator(film)));
  }

  return (
    <div className="box-one-film">
      <img
        src={`https://image.tmdb.org/t/p/original${
          filmsDetails ? filmsDetails.poster_path : ""
        }`}
        alt="photos"
      />
      <div className="box-descrip-film">
        <div className="style-title">
          {filmsDetails ? filmsDetails.original_title : ""}
        </div>
        <div className="style-tag">
          {filmsDetails ? filmsDetails.tagline : ""}
        </div>
        <div className="style-rating">
          Рейтинг:{" "}
          {filmsDetails.vote_average
            ? filmsDetails.vote_average.toFixed(1)
            : "Нет данных"}
        </div>
        <div className="style-box-detail">
          Продолжительность:{" "}
          {filmsDetails.runtime ? filmsDetails.runtime + " мин." : "Нет данных"}
          <br />
          {filmsDetails ? "Дата выхода: " + filmsDetails.release_date : ""}
          <br />
          Жанр:{" "}
          {filmsDetails.genres && filmsDetails.genres
            ? filmsDetails.genres.map((genre) => (
                <>
                  <span className="" id={genre.id}>
                    {genre.name}
                  </span>
                </>
              ))
            : "Нет данных"}
        </div>
        <div className="style-descrip">
          Описание:
          <br />
          {filmsDetails.overview ? filmsDetails.overview : "Нет данных"}
        </div>
      </div>
    </div>
  );
}
