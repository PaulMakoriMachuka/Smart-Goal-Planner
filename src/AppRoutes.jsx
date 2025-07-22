import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Navigation from "./navigation";
import GoalDashboard from "./GoalDashboard"; // ✅ this contains Routema inside it

function AppRoutes() {
  return (
    <Router>
      <Navigation />
      <div style={{ flex: 1 }} className="m-2">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routema" element={<GoalDashboard />} /> {/* ✅ Use this instead of Routema directly */}
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
