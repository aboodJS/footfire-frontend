import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useEffect, useRef, useState } from "react";

function App() {
  const [result, setResult] = useState([]);
  const [type, setType] = useState("teams");
  const searchRef = useRef(null);
  const selectRef = useRef(null);
  async function getData(target: string) {
    switch (type) {
      case "teams":
        await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${target}&s=soccer`
        )
          .then((d) => d.json())
          .then((d) =>
            setResult(d.teams.filter((t: object) => t.strSport === "Soccer"))
          );

        console.log(type);
        console.log(result);
        console.log(target);

        break;
      case "players":
        await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${target}&s=soccer`
        )
          .then((d) => d.json())
          .then((d) => setResult(d.player));

        console.log(type);
        console.log(result.player);
        console.log(target);
        break;

      case "matches":
        await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/searchevents.php?e=${target}`
        )
          .then((d) => d.json())
          .then((d) => setResult(d.event));

        console.log(type);
        console.log(result.event);
        console.log(target);
        break;
    }
  }

  useEffect(() => {
    setType(selectRef.current.value);
    console.log(type);
  }, [type]);
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
        />
        <button
          onClick={() => {
            getData(searchRef.current.value);
          }}
          className="button"
        >
          search
        </button>
        <select
          ref={selectRef}
          onChange={() => {
            setType(selectRef.current.value);
          }}
          name=""
          id=""
        >
          <option value="teams" defaultValue="true">
            teams
          </option>
          <option value="players">players</option>
          <option value="matches">matches</option>
        </select>
      </div>
      <SideBar></SideBar>

      <ul className="resultlist">
        {result.map((e: string, i: number) => {
          if (e !== null) {
            const nameKey = Object.keys(e).find((key) => key.match(/str[A-Z]/));
            const leagueKey = Object.keys(e).find((key) => key.match(/strL/));
            console.log(nameKey);
            return (
              <li className="searchresult" key={i}>
                {e[nameKey]} - {e[leagueKey] || e.strTeam}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default App;
