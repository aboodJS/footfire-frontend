import { useEffect, useState } from "react";
import styles from "../styles/Leagues.module.css";
import TeamBox from "./TeamBox.tsx";

function SerieA() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  async function getJson() {
    try {
      const result = await fetch(
        "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Italian_Serie_A"
      ).then((d) => d.json());

      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getJson();
  }, []);
  return (
    <>
      <h1>Serie A</h1>
      <ul>
        {loading === true ? (
          <p>loading</p>
        ) : (
          data.teams.map((elem: object, i: number) => {
            return (
              <li key={i}>
                <img src={elem.strBadge} alt="" />
                {elem.strTeam}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}

export default SerieA;
