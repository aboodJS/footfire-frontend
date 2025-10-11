import { Link } from "react-router";

function SideBar() {
  return (
    <>
      <aside className="sidebar">
        <Link to="/leagues/English_Premier_League">Premier League</Link>
        <Link to="/leagues/Spanish_La_liga">La Liga</Link>
        <Link to="/leagues/French_ligue_1">Ligue 1</Link>
        <Link to="/leagues/Italian_Serie-A">Serie A</Link>
        <Link to="/leagues/German_bundesliga">Bundesliga</Link>
      </aside>
    </>
  );
}

export default SideBar;
