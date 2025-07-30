import React from 'react'
import './MovieCard.css';
import Star from "../../assets/star.png";

const MovieCard = () => {
  return (
    <a href="" className='movie_card'>
      <img src="https://www.tallengestore.com/cdn/shop/products/TopGunMaverick-TomCruise-HollywoodActionMoviePoster_71eb01ab-5018-48a0-a9ef-1abb7b810d29.jpg?v=1673605521" alt="" className='movie_poster'/>
      <div className="movie_details">
        <h3 className='movie_details_heading'>Movie Name</h3>
        <div className="movie_date_rate">
            <p>Release Date: 2022-12-01</p>
            <p>Rating: 8.5 <img src={Star} alt="rating icon" className='card_emoji' /></p>
        </div>
        <p className='movie_description'>This is a brief description of the movie.</p>
      </div>
    </a>
  )
}

export default MovieCard
