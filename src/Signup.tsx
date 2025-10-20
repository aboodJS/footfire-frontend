import { Link } from "react-router";
import styles from "./styles/Form.module.css";

function Signup() {
  return (
    <>
      <main>
        <h1>
          <Link className={styles.link} to={"/"}>
            FootFire⚽🔥
          </Link>
        </h1>
        <div className={styles.form}>
          <h2>sign up</h2>

          <div className={styles.grid}>
            <label htmlFor="username">username:</label>
            <input
              className={styles.userInput}
              name="username"
              type="text"
              required
            />
          </div>
          <div className={styles.grid}>
            <label htmlFor="passwd">password:</label>
            <input
              className={styles.userInput}
              name="passwd"
              type="password"
              required
            />
          </div>
          <button className="button">Signup</button>
          <p>
            already have an account? <Link to={"/login"}>login</Link>
          </p>
        </div>
      </main>
    </>
  );
}
export default Signup;
