import React, { useState, useEffect } from "react";
import { SelectFilters } from "../../components/SelectFilters/SelectFilters";
import { Link } from "react-router-dom";
import ExactFilm from "../../components/ExactFilm/ExactFilm";
import { Search } from "../../components/Search/Search";
import { Pagination } from "@mui/material";
import "./movies.style.css";
import { Header } from "../../components/Header/Header";

export function Movies() {
  const [films, setFilms] = useState([]);
  const [quantityPgs, setquantityPgs] = useState(500);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("popular");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filter}?page=${currentPage}&api_key=dee7581b88b97cd7cf3691ac50f9c21d`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
        setquantityPgs(500);
      });
  }, [currentPage, filter]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [films]);

  function dropDownChanger(v) {
    setFilter(v);
  }

  function filmSearcher(inputValue) {
    if (inputValue === searchValue) return;
    setSearchValue(inputValue);
    if (inputValue === "") {
      fetch(
        `https://api.themoviedb.org/3/movie/${filter}?page=${currentPage}&api_key=dee7581b88b97cd7cf3691ac50f9c21d`
      )
        .then((res) => res.json())
        .then((data) => {
          setFilms(data.results);
          setquantityPgs(500);
        });
    } else {
      fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=dee7581b88b97cd7cf3691ac50f9c21d&language=en-US&query=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFilms(data.results);
          setquantityPgs(1);
        });
    }
  }

  const getNewPage = (number) => {
    fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=dee7581b88b97cd7cf3691ac50f9c21d&language=en-US&query=${searchValue}&page=${number}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
        setquantityPgs(data.total_pages);
      });
    setCurrentPage(number);
  };

  return (
    <div>
      <div className="box-menu">
        <SelectFilters
          className="style-select"
          filter={filter}
          dropDownChanger={dropDownChanger}
        />
        <Search
          className="search-style"
          searchValue={searchValue}
          filmSearcher={filmSearcher}
        />
        <Header />
      </div>
      <div className="backgr-films">
        <div className="flex-film">
          {films?.map((film, i) => {
            const average = film.vote_average;
            const rating = Math.round(average * 10) / 10;
            return (
              <Link to={`/persons/${film.id}`} key={i}>
                <ExactFilm rating={rating} film={film} />
              </Link>
            );
          })}
        </div>
      </div>
      {quantityPgs <= 1 ? (
        <div></div>
      ) : (
        <div className="style-paginations">
          <Pagination
            count={quantityPgs}
            page={currentPage}
            onChange={(_, number) => {
              getNewPage(number);
            }}
            variant="outlined"
            boundaryCount={2}
          />
        </div>
      )}
    </div>
  );
}
