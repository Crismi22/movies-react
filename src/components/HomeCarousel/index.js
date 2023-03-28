import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./style.css";

function HomeCarousel({ movies, isNowPlaying }) {
  return isNowPlaying ? (
    <Splide
      aria-label="My Favorite Images"
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
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="film-poster"
            />
            <div className="desc-container">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  ) : (
    <Splide
      aria-label="My Favorite Images"
      options={{
        height: "350px",
        gap: "1rem",
        perPage: 5,
        pagination: false,
      }}
    >
      {movies?.results?.map((movie) => (
        <SplideSlide key={movie.id}>
          <div className="slide">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="film-poster"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default HomeCarousel;
