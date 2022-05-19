import React, { useEffect, useState } from "react";
import { tryGetPopularMovies } from "../../apiConfig";

const Banner = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getMovie = async () => {
    const res = await tryGetPopularMovies();
    if (res.length === 0) {
      console.log("Error");
    } else {
      setMovie(res[getRandomInt(res.length)]);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  const img =
    "https://image.tmdb.org/t/p/w1280/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg";

  return (
    <div>
      <h1 style={{ backgroundImage: `url(${img})`, height: "60vh" }}>
        {movie.title}
      </h1>
    </div>
  );
};

export default Banner;
