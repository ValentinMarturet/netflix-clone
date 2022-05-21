import React from "react";
import { SwiperSlide } from "swiper/react";
import { apiBuilder, tryGetPopularMovies } from "../../apiConfig";
import styles from "./Card.module.css";
import "swiper/css";

const Card = ({ content }) => {
  const posterUrl = apiBuilder.tryGetPoster(content.poster_path);

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${posterUrl})` }}
    >
      <h2 className={styles.card_title}>{content.title || content.name}</h2>
    </div>
  );
};

export default Card;
