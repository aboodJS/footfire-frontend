import { Link } from "react-router";

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <Link to="/LaLiga">La Liga</Link>
        <Link to="/PL">Premier League</Link>
        <Link to="/LigueOne">Ligue 1</Link>
        <Link to="/BundesLiga">Bundesliga</Link>
        <Link to="/SerieA">Serie A</Link>
      </aside>
    </>
  );
}

export default SideBar;
