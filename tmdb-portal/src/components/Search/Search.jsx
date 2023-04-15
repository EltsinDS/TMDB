import { useState, useEffect } from "react";
import "./search.style.css";

export function Search({ searchValue, filmSearcher }) {
  const [val, setVal] = useState("");

  useEffect(() => {
    filmSearcher(val);
  }, [val, filmSearcher]);

  function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  const processChange = debounce((event) => setVal(event.target.value));

  return (
    <div className="search-div">
      <input
        className="search-input"
        placeholder="Название"
        type="text"
        onChange={processChange}
      />
    </div>
  );
}
