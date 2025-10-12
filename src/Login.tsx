import { Link } from "react-router";
import styles from "./styles/Form.module.css";
function Login() {
  return (
    <>
      <main>
        <h1>
          <Link className={styles.link} to={"/"}>
            FootFire⚽🔥
          </Link>
        </h1>
        <div>
          <h2>Log in</h2>
          <form action="#" method="get">
            <div className={styles.grid}>
              <label htmlFor="username">username:</label>
              <input
                placeholder="Enter your username"
                type="text"
                name="username"
                className={styles.userInput}
              />
            </div>
            <div className={styles.grid}>
              <label htmlFor="password">password:</label>

              <input
                placeholder="Enter your password"
                type="password"
                name="password"
                className={styles.userInput}
              />
            </div>
            <input className="button" type="submit" value="log in" />
          </form>
          <p>
            don't have an account? <Link to={"/signup"}>Sign up</Link>
          </p>
        </div>
      </main>
    </>
  );
}
export default Login;
