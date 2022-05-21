import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import { tryGetPopularMovies } from "../../apiConfig";
import Card from "../Card/Card.jsx";
import styles from "./Carrousel.module.css";
import useWindowDimensions from "./hooks/useWindowDimensions";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Swiper.css";

const Carrousel = ({ title = "Error" }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const { width, height } = useWindowDimensions();

  const getData = async () => {
    try {
      const res = await tryGetPopularMovies();
      setData(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.carrousel_container}>
      <h1 className={styles.title}>{title}</h1>
      <Swiper
        className={styles.carrousel}
        style={{ padding: "0 2rem" }}
        modules={[Navigation, Scrollbar]}
        spaceBetween={10}
        slidesPerView={8}
        scrollbar={{ draggable: true }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {!loading &&
          data.map((element) => {
            return (
              <SwiperSlide>
                <Card key={element.id} content={element} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carrousel;
