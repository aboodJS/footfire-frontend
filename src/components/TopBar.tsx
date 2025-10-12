import { createContext, useRef, useState } from "react";
import styles from "../styles/TopBar.module.css";
import { Link } from "react-router";

// http://localhost:5000

function TopBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchbox}>
        <h1>FootFire</h1>
      </div>
      <div className={styles.btnbox}>
        <Link className={styles.link} to={"/login"}>
          Log in
        </Link>
        <Link className={styles.link} to={"/Signup"}>
          Sign up
        </Link>
        <Link className={styles.link} to={"/about"}>
          about
        </Link>
      </div>
    </nav>
  );
}

export default TopBar;
