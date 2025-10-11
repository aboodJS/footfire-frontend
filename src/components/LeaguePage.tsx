import { useEffect, useState } from "react";
import { useParams } from "react-router";

function LeaguePage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      await fetch(
        `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${id}`
      )
        .then((d) => d.json())
        .then(async (d) => {
          setData(d);
          await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=${d.teams[0].idLeague}`
          )
            .then((d) => d.json())
            .then((d) => setTable(d.table));
        });
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>{loading ? <p></p> : <p>{data.teams[0].strLeague}</p>}</h1>
      <ol>
        <h3>{loading ? "" : "Top 5"}</h3>
        {table.map((e: object, i: number) => {
          return (
            <li key={i}>
              <img src={e.strBadge} alt="" />
              {e.strTeam}
            </li>
          );
        })}
      </ol>
    </>
  );
}
export default LeaguePage;
