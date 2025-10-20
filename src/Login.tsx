import { Link } from "react-router";
import styles from "./styles/Form.module.css";
import { useRef, useState } from "react";
function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const nameInput = useRef(null);
  const passwordInput = useRef(null);

  async function handleFormSubmit(
    name: string = "guest",
    passWord: string = "1234"
  ) {
    await fetch("http://localhost:5000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: name, password: passWord }),
    })
      .then((r) => r.json())
      .then((r) => {
        localStorage.setItem("data", JSON.stringify(r.request));
      });
  }

  return (
    <>
      <main>
        <h1>
          <Link className={styles.link} to={"/"}>
            FootFire⚽🔥
          </Link>
        </h1>
        <div className={styles.form}>
          <h2>Log in</h2>

          <div className={styles.grid}>
            <label htmlFor="username">username:</label>
            <input
              onChange={() => setName(nameInput.current.value)}
              ref={nameInput}
              className={styles.userInput}
              name="username"
              type="text"
              required
            />
          </div>
          <div className={styles.grid}>
            <label htmlFor="passwd">password:</label>
            <input
              onChange={() => setPass(passwordInput.current.value)}
              ref={passwordInput}
              className={styles.userInput}
              name="passwd"
              type="password"
              required
            />
          </div>
          <button
            onClick={() => {
              handleFormSubmit(name, pass);
            }}
            className="button"
          >
            Login
          </button>
          <p>
            don't have an account? <Link to={"/signup"}>Sign up</Link>
          </p>
        </div>
      </main>
    </>
  );
}
export default Login;
