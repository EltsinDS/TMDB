import { Layout } from "../../Pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Persons } from "../../Pages/Persons/Persons";
import { Movies } from "../../Pages/Movies/Movies";
import { PersonDetails } from "../../Pages/PersonDetails/PersonDetails";
import { MovieDetails } from "../../Pages/MovieDetails/MovieDetails";
import { ErrorBoundary } from "../../Pages/ErrorBoundary/ErrorBoundary";
import "./App.style.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="/persons/:id" element={<MovieDetails />}></Route>
            <Route path="/persons" element={<Persons />} />
            <Route path="/films/:id" element={<PersonDetails />}></Route>
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
