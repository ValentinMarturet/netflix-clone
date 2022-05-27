import React from "react";
import { apiBuilder } from "../../apiConfig";
import styles from "./Card.module.css";
import "swiper/css";

const Card = ({ content, handleSelect }) => {
  const posterUrl = apiBuilder.tryGetPoster(content.poster_path);

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${posterUrl})` }}
      onClick={() => {
        handleSelect(content);
      }}
    >
      <h2 className={styles.card_title}>{content.title || content.name}</h2>
    </div>
  );
};

export default Card;
