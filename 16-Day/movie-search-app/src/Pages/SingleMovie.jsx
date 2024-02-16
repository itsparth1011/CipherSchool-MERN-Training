import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

function SingleMovie() {
  const [movie, SetMovie] = useState({});
  const { imdbID } = useParams();
  const apiKey = import.meta.env.VITE_OMDB_KEY;
  const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
  async function fetchMovie() {
    const response = await axios.get(endpoint);
    SetMovie(response.data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <p>Title: {movie.Title}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Country: {movie.Country}</p>
      <p>Year : {movie.Year}</p>
      <p>Rated : {movie.Rated}</p>
    </div>
  )
}

export default SingleMovie;
