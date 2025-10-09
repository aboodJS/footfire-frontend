import { useEffect, useState } from "react";
import styles from "../styles/Leagues.module.css";

function BundesLiga() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  async function getJson() {
    try {
      const result = await fetch(
        "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=German_Bundesliga"
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
    <main>
      <h1>Bundesliga</h1>
      <ul>
        {loading === true ? (
          <p>loading</p>
        ) : (
          data.teams.map((elem, i) => {
            return (
              <li key={i}>
                <img src={elem.strBadge} alt="" />
                {elem.strTeam}
              </li>
            );
          })
        )}
      </ul>
    </main>
  );
}

export default BundesLiga;
