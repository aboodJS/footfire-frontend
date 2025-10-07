import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useRef, useState } from "react";

function App() {
  const [result, setResult] = useState([]);
  const searchRef = useRef(null);
  async function getData(target) {
    await fetch(`http://localhost:5000/teams/${target}`)
      .then((d) => d.json())
      .then((d) => setResult(d.results));
  }
  return (
    <>
      <TopBar></TopBar>
      <div className="searchbox">
        <input
          className="search"
          type="search"
          ref={searchRef}
          placeholder="search"
          name=""
          id=""
        />{" "}
        <button
          onClick={() => {
            getData(searchRef.current.value);
          }}
          className="button"
        >
          search
        </button>
      </div>
      <SideBar></SideBar>

      <ul className="resultlist">
        {result.map((e: string, i: number) => {
          if (e !== null) {
            return (
              <li className="searchresult" key={i}>
                {e}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default App;
