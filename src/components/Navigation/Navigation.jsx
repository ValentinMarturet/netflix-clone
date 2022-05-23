import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import netflix_logo from "../../images/Netflix_Logo.png";
import useScrollPosition from "./hooks/useScrollPosition";

const Navigation = () => {
  const [scrollPosition] = useScrollPosition();
  const [navbar, setNavbar] = useState(styles.transparentNav);

  useEffect(() => {
    if (scrollPosition > 150) {
      setNavbar(styles.solidNav);
    } else {
      setNavbar(styles.transparentNav);
    }
  });

  return (
    <nav className={`${styles.navigation} ${navbar}`}>
      <img src={netflix_logo} className={styles.netflix_logo} />
      <div className={styles.navTextContainer}>
        <div className={styles.navText}>ES</div>
        <div className={styles.navText}>Sing Out</div>
      </div>
    </nav>
  );
};

export default Navigation;
