import React from "react";
import HomeCarousel from "../../components/HomeCarousel";
import { API_KEY } from "../../utils/constantes";
import { useEffect, useState } from "react";

export const Home = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  console.log(movie.results);
  return (
    <div>
      <HomeCarousel />
    </div>
  );
};