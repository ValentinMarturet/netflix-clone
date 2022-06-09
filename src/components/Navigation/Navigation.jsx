import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import netflix_logo from "../../images/Netflix_Logo.png";
import useScrollPosition from "./hooks/useScrollPosition";
import userUrl from "../../images/netflix-icon-users/user-peng.png";
import ProfileIcon from "../svgs/ProfileIcon.jsx";

const Navigation = () => {
  const [scrollPosition] = useScrollPosition();
  const [navbar, setNavbar] = useState(styles.transparentNav);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

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
        <div className={styles.user_setting}>
          <img src={userUrl} className={styles.navUser} />
          <ul className={styles.drop_down}>
            <li className={styles.drop_li}>
              <ProfileIcon clase={styles.profile_icon} />
              Profile
            </li>
            <hr style={{ borderColor: "#6d6d6e" }} />
            <li className={styles.drop_li}>SingOut</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
