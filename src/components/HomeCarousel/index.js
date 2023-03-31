import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./style.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import placeholder from "../../assets/no-image-placeholder.png";

function HomeCarousel({ movies, isNowPlaying }) {
  return isNowPlaying ? (
    <Splide
      aria-label="Now Playing Movies"
      options={{
        autoplay: true,
        pauseOnHover: true,
        rewind: true,
        height: "auto",
        gap: "1rem",
        arrows: false,
        interval: 5000,
      }}
    >
      {movies?.results?.map((movie) => (
        <SplideSlide key={movie.id}>
          <div className="slide">
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="film poster"
              />
            ) : (
              <img src={placeholder} alt="film poster not available" />
            )}
            <div className="container">
              <div className="desc-container">
                <h2>{movie.title}</h2>
                <p className="hide-on-mobile">{movie.overview}</p>
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
          breakpoints: {
            768: {
              perPage: 3,
            },
          },
        }}
      >
        {movies?.results?.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="slide">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="film poster"
                  />
                ) : (
                  <img src={placeholder} alt="film poster not available" />
                )}
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default HomeCarousel;
