import React from "react";
import "./style.css";
import HomeCarousel from "../../components/HomeCarousel";
import { Loader } from "../../components/Loader";
import { API_KEY, URL_BASE } from "../../utils/constantes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export const Home = () => {
  // API call para peliculas en cartelera
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [nowPlayingMoviesComplete, setNowPlayingMoviesComplete] =
    useState(false);
  useEffect(() => {
    fetch(`${URL_BASE}/movie/now_playing?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setNowPlayingMovies(data);
        setNowPlayingMoviesComplete(true);
      });
  }, []);

  console.log(nowPlayingMovies.results);
  // /API call para peliculas en cartelera

  // API call para peliculas populares
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMoviesComplete, setPopularMoviesComplete] = useState(false);

  useEffect(() => {
    fetch(`${URL_BASE}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data);
        setPopularMoviesComplete(true);
      });
  }, []);

  console.log(popularMovies.results);
  // /API call para peliculas populares

  // API call para peliculas mejor puntuadas
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedMoviesComplete, setTopRatedMoviesComplete] = useState(false);

  useEffect(() => {
    fetch(`${URL_BASE}/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data);
        setTopRatedMoviesComplete(true);
      });
  }, []);

  console.log(topRatedMovies.results);
  // /API call para peliculas mejor puntuadas

  return (
    <>
      {nowPlayingMoviesComplete &&
      popularMoviesComplete &&
      topRatedMoviesComplete ? (
        <div className="home">
          <HomeCarousel movies={nowPlayingMovies} isNowPlaying={true} />
          <div className="header-section">
            <h2>Películas populares</h2>
            <Link className="link-to-page" to="/populares">
              Ver más <FaAngleRight />
            </Link>
          </div>
          <HomeCarousel movies={popularMovies} isNowPlaying={false} />
          <div className="header-section">
            <h2>Películas mejor puntuadas</h2>
            <Link className="link-to-page" to="/mejores">
              Ver más <FaAngleRight />
            </Link>
          </div>
          <HomeCarousel movies={topRatedMovies} isNowPlaying={false} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
