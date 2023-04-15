import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPersonExatsActionCreator } from "..//..//../store/actions/index";
import "./personDetails.style.css";

export function PersonDetails() {
  const [img, setImg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentPerson = useSelector((state) => state.detailsActor);

  useEffect(() => {
    getDatas();
  });

  function getDatas() {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=dee7581b88b97cd7cf3691ac50f9c21d`
    )
      .then((result) => result.json())
      .then((actor) => dispatch(setPersonExatsActionCreator(actor)));

    fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=dee7581b88b97cd7cf3691ac50f9c21d`
    )
      .then((res) => res.json())
      .then((data) => setImg(data.profiles[0]?.file_path));
  }

  return (
    <div className="box-about-person">
      <div className="photo-actor">
        <img
          src={
            img
              ? `https://image.tmdb.org/t/p/original${img}`
              : `https://прокомплект27.рф/img/catalog/k1.jpg`
          }
          alt="main_img"
        />
      </div>
      <div className="descrip-actor">
        <div className="name-actor">
          {currentPerson ? currentPerson.name : ""}
        </div>
        <div className="birthday-actor">
          Дата рождения: {currentPerson ? currentPerson.birthday : ""}
        </div>
        <div>{currentPerson ? currentPerson.known_for_department : ""}</div>
        <div>{currentPerson ? currentPerson.place_of_birth : ""}</div>
        <div>{currentPerson ? currentPerson.popularity : ""}</div>
      </div>
    </div>
  );
}
