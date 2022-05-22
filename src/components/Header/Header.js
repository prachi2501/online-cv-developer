import React from "react";

import officeJpg from "../../assets/office.jpg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <img src={officeJpg} alt="Resume" />
        <p className={styles.heading}>
        "The beginning is the most important part of the work".
        </p>
    </div>
  );
}

export default Header;
