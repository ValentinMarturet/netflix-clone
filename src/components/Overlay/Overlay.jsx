import React, { useEffect, useState } from "react";
import styles from "./Overlay.module.css";
import { apiBuilder, apiQuality, apiEntity, tmdb } from "../../apiConfig";
import Card from "../Card/Card";
import axios from "axios";

const Overlay = ({ content, handleClose }) => {
  const bannerImg = apiBuilder.tryGetPoster(
    content.backdrop_path,
    apiQuality.backdropLarge
  );

  const [details, setDetails] = useState({ loading: true, data: {} });
  const [similar, setSimilar] = useState({ loading: true, data: {} });

  const getSimilar = async (entity, id, lang = "en") => {
    try {
      const res = await apiBuilder.tryGetRecomendations(entity, id, lang);
      setSimilar({
        loading: false,
        data: res.data.results,
      });
    } catch (error) {
      console.log(error);
      setSimilar({
        loading: false,
        data: {},
      });
    }
  };

  const getDetails = async (entity, id, lang = "es") => {
    try {
      const res = await apiBuilder.tryGetById(entity, id, lang);
      setDetails({
        loading: false,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
      setDetails({
        loading: false,
        data: {},
      });
    }
  };

  useEffect(() => {
    const type = content.title ? apiEntity.movieById : apiEntity.tvById;
    getDetails(type, content.id);
    getSimilar(type, content.id);
  }, []);

  const genres = (genreList) => {
    return genreList
      .map((genre) => genre.name)
      .reduce((acc, genre, i, array) => {
        if (i === array.length - 1) {
          return acc + " & " + genre;
        } else {
          return acc + ", " + genre;
        }
      });
  };
  const year = (info) => {
    return (
      info.first_air_date?.split("-")[0] || info.release_date?.split("-")[0]
    );
  };
  const duration = (info) => {
    if (info.runtime) {
      return (
        Math.floor(info.runtime / 60).toString() +
        "h " +
        (info.runtime % 60 ? (info.runtime % 60).toString() + "m" : "")
      );
    } else if (info.number_of_seasons === 1) {
      return info.number_of_episodes + " episodes";
    } else {
      return info.number_of_seasons + " seasons";
    }
  };

  return (
    <div className={styles.overlayContainer}>
      {!details.loading && (
        <div className={styles.overlay}>
          <div
            className={styles.header}
            style={{
              backgroundImage: `linear-gradient(
          to top,
          rgba(22, 22, 22, 1) 0%,
          rgba(22, 22, 22, 0) 30%
        ), url(${bannerImg})`,
            }}
          >
            <h1 className={styles.title}>{content.title || content.name}</h1>
            <button
              className={styles.close}
              type="button"
              onClick={handleClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-uia="previewModal-closebtn"
                role="button"
                aria-label="close"
                tabIndex="0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div className={styles.info}>
            <div className={styles.infoLeft}>
              <span>Rating: {details.data.vote_average}</span>
              <span>{year(details.data)}</span>
              <span>{duration(details.data)}</span>
              <p>{details.data.overview}</p>
            </div>
            <div className={styles.infoRight}>
              <span>Genero: {genres(details.data.genres)}</span>
            </div>
          </div>
          {!similar.loading && similar.data[0] && (
            <div className={styles.similar}>
              <Card content={similar.data[0]}></Card>
              <Card content={similar.data[1]}></Card>
              <Card content={similar.data[2]}></Card>
            </div>
          )}
          <button onClick={() => console.log(similar.data)}>recomenda</button>
          <button onClick={() => console.log(details)}>Details</button>
        </div>
      )}
    </div>
  );
};

export default Overlay;
