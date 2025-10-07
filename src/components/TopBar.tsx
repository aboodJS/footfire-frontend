import { createContext, useRef, useState } from "react";
import styles from "../styles/TopBar.module.css";

// http://localhost:5000

function TopBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchbox}>
        <h1>FootFire</h1>
      </div>
      <div className={styles.btnbox}>
        <button className="button">Log in</button>
        <button className="button">Sign up</button>
      </div>
    </nav>
  );
}

export default TopBar;
