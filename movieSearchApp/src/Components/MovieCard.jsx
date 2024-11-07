import React from 'react'
import './movieCard.css'

const MovieCard = (props) => {
  const {movieTitle, moviePoster, movieYear} = props;
  return (
    <div className='card'>
        <div className="image-container">
            <img src={moviePoster} alt="Something is Wrong" />
        </div>
        <h4>{movieTitle}</h4>
        <h5>{movieYear}</h5>
        <p>Ratings: 5☆</p>
    </div>
  )
}

export default MovieCard
