import React, { useState, useEffect } from 'react';

function Experiment() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing/?api_key=b385fb9bcd0e508533787c7019ff7330`)
      .then(response => response.json())
      .then(data => {
        setRecords(data.results);
      })
      .catch(err => console.log("error"))
  }, []);

  return (
    <div>
      {records.map(movie => (
        <div >
          {/* <img src={movie.poster_path} alt="" /> */}
          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}  alt='fo'></img>
          {/* <p>{movie.overview}</p> */}
        </div>
        
      ))}
    </div>
  );
}

export default Experiment;
