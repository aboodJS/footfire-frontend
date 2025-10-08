import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to={"/"}>Go to the Home Page</Link>
    </>
  );
}

export default NotFound;
