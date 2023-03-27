import React from "react";
import "./style.css";
import HomeCarousel from "../../components/HomeCarousel";
import { API_KEY, URL_BASE } from "../../utils/constantes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  // API call para peliculas en cartelera
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  useEffect(() => {
    fetch(`${URL_BASE}/movie/now_playing?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setNowPlayingMovies(data));
  }, []);

  console.log(nowPlayingMovies.results);
  // /API call para peliculas en cartelera

  // API call para peliculas populares
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(`${URL_BASE}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data));
  }, []);

  console.log(popularMovies.results);
  // /API call para peliculas populares

  // API call para peliculas mejor puntuadas
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    fetch(`${URL_BASE}/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTopRatedMovies(data));
  }, []);

  console.log(topRatedMovies.results);
  // /API call para peliculas mejor puntuadas

  return (
    <>
      <HomeCarousel movies={nowPlayingMovies} isNowPlaying={true} />
      <div className="header-section">
        <h2>Películas populares</h2>
        <Link to="/populares">Ver más</Link>
      </div>
      <HomeCarousel movies={popularMovies} isNowPlaying={false} />
      <div className="header-section">
        <h2>Películas mejor puntuadas</h2>
        <Link to="/mejores">Ver más</Link>
      </div>
      <HomeCarousel movies={topRatedMovies} isNowPlaying={false} />
    </>
  );
};
