import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movies({ movies }) {
  // console.log(movies);
  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <Link
          key={movie.imdbID}
          className={styles.movieLink}
          to={`movie/${movie.imdbID}`}
        >
          <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
          <h3 className={styles.Title}>{movie.Title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Movies;
