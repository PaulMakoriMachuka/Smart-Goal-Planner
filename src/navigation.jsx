import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const getClass = (path) => (location.pathname === path ? "btn-primary" : "btn-secondary");

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "150px" }}>
      <Link to="/" className={`btn ${getClass("/")} m-1`}>
        Goal Dashboard
      </Link>
    </div>
  );
}

export default Navigation;
