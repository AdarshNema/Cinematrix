import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import "./Row.css";
const base_url = "https://www.themoviedb.org/t/p/original";
function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  // console.log(movies)
  
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Rows;
