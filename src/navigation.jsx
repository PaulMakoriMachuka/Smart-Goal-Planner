// import { Link, useLocation } from "react-router-dom";

// function Navigation() {
//   const location = useLocation();

//   const getClass = (path) => {
//     return location.pathname === path ? "btn-primary" : "btn-secondary";
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
//       <Link to="/" className={`btn ${getClass("/")} m-1`}>
//         Home
//       </Link>
//       <Link to="/routema" className={`btn ${getClass("/routema")} m-1`}>
//         Routema
//       </Link>
//       <Link to="/contact" className={`btn ${getClass("/contact")} m-1`}>
//         Contact
//       </Link>
//     </div>
//   );
// }





//export default Navigation;





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
