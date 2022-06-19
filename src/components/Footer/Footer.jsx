import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.footer_text}>
        <a>Github</a>
        <a>LinkedIn</a>
        <a>Portafolio</a>
      </span>
      <p className={styles.footer_text}>
        Netflix clon utilizando React, tmdbAPI, Swiper y React Router.
      </p>
    </div>
  );
};

export default Footer;
