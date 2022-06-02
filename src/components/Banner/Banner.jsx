import React, { useEffect, useState } from "react";
import { tryGetPopularMovies } from "../../apiConfig";
import styles from "./Banner.module.css";
import { apiBuilder, apiQuality } from "../../apiConfig.js";
import InfoIcon from "../svgs/InfoIcon";

const Banner = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getMovie = async () => {
    try {
      const res = await tryGetPopularMovies();
      setMovie(res[getRandomInt(res.length)]);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  const bannerImg = apiBuilder.tryGetPoster(
    movie.backdrop_path,
    apiQuality.backdropLarge
  );

  return (
    <div
      className={styles.banner_container}
      style={{
        backgroundImage: `linear-gradient(
          to top,
          rgba(22, 22, 22, 1) 0%,
          rgba(22, 22, 22, 0) 30%
        ), url(${bannerImg})`,
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.overview}>{movie.overview}</p>
        <button className={styles.inf_button}>
          More Info
          <InfoIcon clase={styles.inf_icon} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
