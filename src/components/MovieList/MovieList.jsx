import React, { useState,useEffect } from 'react'
import './MovieList.css';
import Fire from "../../assets/fire.png";
import MovieCard from './MovieCard';
  
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);


  const fetchMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=182205f8fc29949787f11ed3781d175e");
    const data = await response.json();
    setMovies(data.results);

  };
  
  const handleFilter =(rate)=>{
    setMinRating(rate);
    const filtered = movies.filter(movie => movie.vote_average >= rate);
    setMovies(filtered);
  }

  return (
    <section className="movie-list">
        <header className='align_center movie_list_header'>
      <h2 className='align_center movie_list_heading'>Popular <img src={Fire} alt="fire Emoji" className='navbar_emoji'/></h2>

      <div className='align_center movie-list_fs'>
        <ul className='align_center movie_filter'>
            <li className={`movie_filter_items ${activeFilter === 8 ? 'active' : ''}`} onClick={() => handleFilter(8)}>8+ Star</li>
            <li className={`movie_filter_items ${activeFilter === 7 ? 'active' : ''}`} onClick={() => handleFilter(7)}>7+ Star</li>
            <li className={`movie_filter_items ${activeFilter === 6 ? 'active' : ''}`} onClick={() => handleFilter(6)}>6+ Star</li>
        </ul>
        <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
        </select>
        <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
        </select>
      </div>
      </header>
      <div className="movie_cards">
        {
          movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              movie={movie}
            />
          ))}
      </div>
    </section>
  )
}

export default MovieList
