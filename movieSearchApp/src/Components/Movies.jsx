import React, { useEffect, useState } from 'react'
import './movies.css'
import MovieCard from './MovieCard'

const Movies = () => {

  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies ] = useState("");

  const fetchMovies = async () =>{
    const response = await fetch(
      `https://www.omdbapi.com/?&apikey=f333059c&s=${searchMovies}`, { 
      method : "GET", 
    });

    const data = await response.json();
    console.log({data});
    
    if(data.Response === "True") setMovies(data.Search);
    if(data.Response === "False") setMovies([]);
  }

  useEffect(() =>{
    fetchMovies();
    //searchMovies("");
  }, [searchMovies])

  return (
    <>  
        <label htmlFor="">Search Movies Name :</label><br />
        <input type="text" value={searchMovies} onChange={(e) =>{
          setSearchMovies(e.target.value);
        }}/>

        {/* <button onClick={fetchMovies}>Fetch Movies</button> */}

        {
          movies.length? 
          <div className="movieContainer">
              {
                movies.map((movie, index) =>{
                  return(
                    <>
                      <MovieCard movieTitle={movie.Title} moviePoster={movie.Poster} movieYear={movie.Year} key={movie.imdbID}/>
                    </>
                  )
                })
              }
          </div> : <h2>No Results</h2>
        }
    </>
  )
}

export default Movies
