import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useGetContent from "./hooks/useGetContent";
import Card from "../Card/Card.jsx";
import styles from "./Carrousel.module.css";
import useWindowDimensions from "./hooks/useWindowDimensions";

import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";

const Carrousel = ({ title = "Error", entity, handleSelect }) => {
  const { width, height } = useWindowDimensions();

  const [data, loading] = useGetContent(entity);
  const [slides, setSlides] = useState(8);

  useEffect(() => {
    console.log(width);
    // if (width < 720) {
    //   setSlides(4);
    // } else if (width < 1080) {
    //   setSlides(6);
    // } else {
    //   setSlides(8);
    // }
    setSlides(Math.floor(width / 200));
  }, [width]);

  return (
    <div className={styles.carrousel_container}>
      <h1 className={styles.title}>{title}</h1>
      <Swiper
        className={styles.carrousel}
        style={{ padding: "0 2rem" }}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={slides}
        navigation
      >
        {!loading &&
          data.map((element, index) => {
            return (
              <SwiperSlide>
                <Card
                  key={element.id}
                  content={element}
                  handleSelect={handleSelect}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carrousel;
