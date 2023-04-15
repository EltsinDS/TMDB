import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search/Search";
import "./persons.style.css";
import { Header } from "../../components/Header/Header";

export const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [currentPg, setCurrentPg] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [quantityPgs, setQuantityPgs] = useState(500);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?page=${currentPg}&api_key=dee7581b88b97cd7cf3691ac50f9c21d`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuantityPgs(data.total_pages);
        setPersons(data.results);
      });
  }, [currentPg]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [persons]);

  const filmSearcher = (inputValue) => {
    console.log(inputValue);
    if (inputValue === searchValue) return;
    if (inputValue === "") {
      fetch(
        `https://api.themoviedb.org/3/person/popular?page=${currentPg}&api_key=dee7581b88b97cd7cf3691ac50f9c21d`
      )
        .then((res) => res.json())
        .then((data) => {
          setQuantityPgs(data.total_pages);
          setPersons(data.results);
          setSearchValue("");
        });
    } else {
      setSearchValue(inputValue);
      fetch(
        ` https://api.themoviedb.org/3/search/person?api_key=dee7581b88b97cd7cf3691ac50f9c21d&language=en-US&query=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPersons(data.results);
          setQuantityPgs(1);
        });
    }
  };

  const getNewPage = (num) => {
    fetch(
      ` https://api.themoviedb.org/3/search/person?api_key=dee7581b88b97cd7cf3691ac50f9c21d&language=en-US&query=${searchValue}&page=${num}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPersons(data.results);
        setQuantityPgs(data.total_pages);
      });
    setCurrentPg(num);
    setSearchValue("");
  };
  return (
    <div className="list-actors-page">
      <div className="box-menu">
        <Search
          className="ml-300"
          searchValue={searchValue}
          filmSearcher={filmSearcher}
        />
        <Header />
      </div>
      <div className="style-actors">
        {persons?.map((person, index) => {
          return (
            <Link to={`/films/${person.id}`} key={index}>
              <div className="box-person">
                <img
                  src={
                    person?.profile_path
                      ? `https://image.tmdb.org/t/p/original${person?.profile_path}`
                      : `https://прокомплект27.рф/img/catalog/k1.jpg`
                  }
                  alt="img"
                />
                <div className="style-name">{person.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
      {quantityPgs <= 1 ? (
        <span></span>
      ) : (
        <div className="style-paginations">
          <Pagination
            count={quantityPgs}
            page={currentPg}
            onChange={(_, num) => getNewPage(num)}
            variant="outlined"
            boundaryCount={2}
          />
        </div>
      )}
    </div>
  );
};
