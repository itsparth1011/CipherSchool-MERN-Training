import React, { useState } from "react";
import axios from "axios";
import Movies from "../Components/Movies";
import styles from "./Home.module.css";

function Home() {
  const [searchMovieInput, setsearchMovieInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setisLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);
    setError(null);

    // Start searching movie

    // move this senstive file to .env file
    const apiKey = import.meta.env.VITE_OMDB_KEY;
    const endpoint = `https://www.omdbapi.com/?&apikey=${apiKey}&s=${searchMovieInput}`;

    try {
      const response = await axios.get(endpoint);
      const { Search, Response, Error } = response.data; // Response --> "True" ?  Search : Error

      if (Response === "True") {
        setMovies(Search);
      } else {
        setError(Error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <input
          type="text"
          placeholder=""
          name="movie-search"
          id="movie-search"
          value={searchMovieInput}
          onChange={(e) => {
            setsearchMovieInput(e.target.value);
          }}
        />
        <button type="submit">Search Movie</button>
      </form>

      {isloading ? (
        <h1>Loadiing...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Movies movies={movies} />
      )}
    </div>
  );
}

export default Home;
