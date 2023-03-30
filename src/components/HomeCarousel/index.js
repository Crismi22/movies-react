import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./style.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function HomeCarousel({ movies, isNowPlaying }) {
  return isNowPlaying ? (
    <Splide
      aria-label="Now Playing Movies"
      options={{
        autoplay: true,
        pauseOnHover: true,
        rewind: true,
        height: "500px",
        gap: "1rem",
        arrows: false,
        interval: 5000,
      }}
    >
      {movies?.results?.map((movie) => (
        <SplideSlide key={movie.id}>
          <div className="slide">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="film poster"
            />
            <div className="container">
              <div className="desc-container">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
              <Link className="link-to-detail" to={`/movie/${movie.id}`}>
                Ver detalles <FaAngleRight />
              </Link>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  ) : (
    <div className="carousel-container">
      <Splide
        aria-label="Movies"
        options={{
          gap: "1rem",
          perPage: 5,
          pagination: false,
          width: "100%",
        }}
      >
        {movies?.results?.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="slide">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="film poster"
                />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default HomeCarousel;
