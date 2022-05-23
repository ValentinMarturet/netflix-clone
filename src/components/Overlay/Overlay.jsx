import React from "react";
import styles from "./Overlay.module.css";

const Overlay = ({ handleDelete }) => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlay}>
        <button onClick={handleDelete}> cerrar</button>
      </div>
    </div>
  );
};

export default Overlay;
