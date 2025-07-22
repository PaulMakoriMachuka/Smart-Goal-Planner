
// import "./App.css";

// import Navigation from "./navigation";
// import GoalDashboard from "./Parentcomponent";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Navigation />
//       <div style={{ flex: 1, padding: "1rem" }}>
//         <Routes>
//           <Route path="/" element={<GoalDashboard />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation";
import GoalDashboard from "./Parentcomponent";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<GoalDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
