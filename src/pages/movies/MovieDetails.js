import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { API_KEY, URL_BASE } from "../../utils/constantes";
import placeholder from "../../assets/no-image-placeholder.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${URL_BASE}/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(id);
      setMovie(data);
    };
    //en el componente MovieDetails, utiliza el id de la película para obtener los detalles de la película utilizando la API
    fetchMovie();
  }, [id]);

  console.log(movie);

  if (!movie) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const getStars = (voteAverage) => {
    const numStars = Math.round(voteAverage / 2);
    return "★".repeat(numStars);
  };

  const starRating = Math.floor(movie.vote_average / 2);

  return (
    <div
      className="movie-details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="movie-details-container">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-details-poster"
          />
        ) : (
          <img src={placeholder} alt="film poster not available" />
        )}
        <div className="movie-details-info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="movie-details-genres">
            {movie?.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div className="movie-details-rating">
            <p>Rating:</p>
            <span>{getStars(movie.vote_average)}</span>
            <span>{starRating}/5</span>
          </div>
          <p>Release date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
