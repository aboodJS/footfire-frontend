import { useEffect, useState } from "react";
import styles from "../styles/Leagues.module.css";

function LigueOne() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  async function getJson() {
    try {
      const result = await fetch(
        "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=French_Ligue_1"
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
      <h1>Ligue 1</h1>
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
    </>
  );
}

export default LigueOne;
